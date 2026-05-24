import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@db/prisma';
import { config } from '@config/env';
import { logger } from '@utils/logger';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ success: false, error: 'Email and password are required' });
    return;
  }

  try {
    const user = await prisma.tenantUser.findFirst({
      where: { email },
      include: { tenant: true }
    });

    if (!user) {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    // Check if tenant is active
    if (!user.tenant.isActive) {
      res.status(403).json({ success: false, error: 'Account suspended' });
      return;
    }

    // Generate tokens
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role, tenantId: user.tenantId },
      config.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      config.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Save login timestamp
    await prisma.tenantUser.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    // Set refresh token in httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      data: {
        accessToken,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          tenantId: user.tenantId,
          tenantName: user.tenant.name
        }
      }
    });
  } catch (error) {
    logger.error('[Auth] Login error', { error });
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const register = async (req: Request, res: Response) => {
  const { hotelName, email, password } = req.body;
  if (!hotelName || !email || !password) {
    res.status(400).json({ success: false, error: 'Hotel name, email, and password are required' });
    return;
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.tenantUser.findFirst({ where: { email } });
    if (existingUser) {
      res.status(400).json({ success: false, error: 'Email already registered' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    // Create Tenant and Owner user in transaction
    const result = await prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.create({
        data: {
          name: hotelName,
          telegramBotToken: `PENDING_${Math.random().toString(36).substring(2, 10)}`, // Temporary token placeholder
          subscriptionStatus: 'trialing'
        }
      });

      const user = await tx.tenantUser.create({
        data: {
          tenantId: tenant.id,
          email,
          passwordHash,
          role: 'owner'
        }
      });

      return { tenant, user };
    });

    res.status(201).json({
      success: true,
      message: 'Registration successful. 14-day trial activated.',
      data: {
        tenantId: result.tenant.id,
        userId: result.user.id
      }
    });
  } catch (error) {
    logger.error('[Auth] Registration error', { error });
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const refresh = async (req: Request, res: Response) => {
  const cookies = req.headers.cookie;
  let refreshToken = '';
  if (cookies) {
    const rawCookie = cookies.split(';').find(c => c.trim().startsWith('refreshToken='));
    if (rawCookie) {
      refreshToken = rawCookie.split('=')[1];
    }
  }

  if (!refreshToken) {
    res.status(401).json({ success: false, error: 'No refresh token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(refreshToken, config.JWT_SECRET) as any;
    const user = await prisma.tenantUser.findUnique({
      where: { id: decoded.id },
      include: { tenant: true }
    });

    if (!user || !user.tenant.isActive) {
      res.status(401).json({ success: false, error: 'Invalid user or inactive account' });
      return;
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role, tenantId: user.tenantId },
      config.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.json({
      success: true,
      data: {
        accessToken
      }
    });
  } catch (error) {
    res.status(401).json({ success: false, error: 'Invalid refresh token' });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  res.json({ success: true, message: 'Logged out successfully' });
};
