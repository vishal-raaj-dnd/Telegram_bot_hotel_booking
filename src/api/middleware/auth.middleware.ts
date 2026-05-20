import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '@config/env';
import { logger } from '@utils/logger';

export interface AuthRequest extends Request {
  user?: any;
}

export const superAdminAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    logger.warn('[Auth] Unauthorized: No token provided');
    res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as any;
    
    if (decoded.role !== 'super_admin') {
      logger.warn(`[Auth] Forbidden: User ${decoded.id} attempted to access super-admin route`);
      res.status(403).json({ success: false, error: 'Forbidden: Super admin access required' });
      return;
    }

    req.user = decoded;
    next();
  } catch (err) {
    logger.error('[Auth] Unauthorized: Invalid token', { error: err });
    res.status(401).json({ success: false, error: 'Unauthorized: Invalid token' });
  }
};
