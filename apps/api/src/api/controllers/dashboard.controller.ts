import { Response } from 'express';
import { prisma } from '@db/prisma';
import { UserRequest } from '../middleware/userAuth.middleware';
import { startOfMonth, endOfMonth, subMonths, format } from 'date-fns';
import { logger } from '@utils/logger';

export const getAnalytics = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  if (!tenantId) {
    res.status(400).json({ success: false, error: 'Tenant context missing' });
    return;
  }

  try {
    const totalBookings = await prisma.booking.count({ where: { tenantId } });
    const activeBookings = await prisma.booking.count({
      where: { tenantId, status: 'confirmed' }
    });

    const bookings = await prisma.booking.findMany({
      where: { tenantId },
      select: { totalAmountPaid: true, createdAt: true, status: true }
    });

    const totalRevenue = bookings
      .filter(b => b.status === 'confirmed' || b.status === 'completed')
      .reduce((sum, b) => sum + Number(b.totalAmountPaid), 0);

    // Calculate monthly earnings for charts
    const now = new Date();
    const currentMonthStart = startOfMonth(now);
    const currentMonthEnd = endOfMonth(now);
    const lastMonthStart = startOfMonth(subMonths(now, 1));
    const lastMonthEnd = endOfMonth(subMonths(now, 1));

    const currentMonthRevenue = bookings
      .filter(b => (b.status === 'confirmed' || b.status === 'completed') && b.createdAt >= currentMonthStart && b.createdAt <= currentMonthEnd)
      .reduce((sum, b) => sum + Number(b.totalAmountPaid), 0);

    const lastMonthRevenue = bookings
      .filter(b => (b.status === 'confirmed' || b.status === 'completed') && b.createdAt >= lastMonthStart && b.createdAt <= lastMonthEnd)
      .reduce((sum, b) => sum + Number(b.totalAmountPaid), 0);

    const revenueGrowth = lastMonthRevenue > 0 
      ? ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100 
      : 0;

    // Monthly breakdown (last 6 months) for chart
    const monthlyStats = [];
    for (let i = 5; i >= 0; i--) {
      const monthDate = subMonths(now, i);
      const mStart = startOfMonth(monthDate);
      const mEnd = endOfMonth(monthDate);
      const mRev = bookings
        .filter(b => (b.status === 'confirmed' || b.status === 'completed') && b.createdAt >= mStart && b.createdAt <= mEnd)
        .reduce((sum, b) => sum + Number(b.totalAmountPaid), 0);

      monthlyStats.push({
        month: format(monthDate, 'MMM'),
        revenue: mRev,
        bookings: bookings.filter(b => b.createdAt >= mStart && b.createdAt <= mEnd).length
      });
    }

    // Recent bookings (limit 5)
    const recentBookings = await prisma.booking.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        guest: true,
        roomCategory: true
      }
    });

    // Room type distribution for chart
    const rooms = await prisma.roomCategory.findMany({
      where: { tenantId, isActive: true },
      include: { bookings: true }
    });

    const roomDistribution = rooms.map(r => ({
      name: r.name,
      value: r.bookings.length
    }));

    res.json({
      success: true,
      data: {
        stats: {
          totalBookings,
          activeBookings,
          totalRevenue,
          currentMonthRevenue,
          revenueGrowth: Math.round(revenueGrowth * 10) / 10
        },
        monthlyStats,
        roomDistribution,
        recentBookings: recentBookings.map(b => ({
          id: b.id,
          reference: b.bookingReference,
          guestName: `${b.guest.firstName} ${b.guest.lastName || ''}`,
          roomName: b.roomCategory.name,
          amount: Number(b.totalAmountPaid),
          status: b.status,
          date: format(b.createdAt, 'yyyy-MM-dd')
        }))
      }
    });
  } catch (error) {
    logger.error('[Dashboard Analytics] Error fetching', { error });
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const getRooms = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  if (!tenantId) {
    res.status(400).json({ success: false, error: 'Tenant context missing' });
    return;
  }

  try {
    const rooms = await prisma.roomCategory.findMany({
      where: { tenantId, isActive: true }
    });
    res.json({ success: true, data: rooms });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const createRoom = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  const { name, description, pricePerNight, maxGuests, totalInventory, amenities, imageUrls } = req.body;

  if (!tenantId || !name || !pricePerNight || !maxGuests || !totalInventory) {
    res.status(400).json({ success: false, error: 'Missing required parameters' });
    return;
  }

  try {
    const room = await prisma.roomCategory.create({
      data: {
        tenantId,
        name,
        description: description || '',
        pricePerNight,
        maxGuests,
        totalInventory,
        amenities: amenities || [],
        imageUrls: imageUrls || []
      }
    });
    res.status(201).json({ success: true, data: room });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const updateRoom = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  const { id } = req.params;
  const { name, description, pricePerNight, maxGuests, totalInventory, amenities, imageUrls } = req.body;

  if (!tenantId) {
    res.status(400).json({ success: false, error: 'Tenant context missing' });
    return;
  }

  try {
    const room = await prisma.roomCategory.findFirst({
      where: { id: req.params.id as string, tenantId }
    });

    if (!room) {
      res.status(404).json({ success: false, error: 'Room category not found' });
      return;
    }

    const updated = await prisma.roomCategory.update({
      where: { id: req.params.id as string },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(pricePerNight && { pricePerNight }),
        ...(maxGuests && { maxGuests }),
        ...(totalInventory && { totalInventory }),
        ...(amenities && { amenities }),
        ...(imageUrls && { imageUrls })
      }
    });

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const deleteRoom = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  const { id } = req.params;

  if (!tenantId) {
    res.status(400).json({ success: false, error: 'Tenant context missing' });
    return;
  }

  try {
    const room = await prisma.roomCategory.findFirst({
      where: { id: req.params.id as string, tenantId }
    });

    if (!room) {
      res.status(404).json({ success: false, error: 'Room category not found' });
      return;
    }

    await prisma.roomCategory.update({
      where: { id: req.params.id as string },
      data: { isActive: false }
    });

    res.json({ success: true, message: 'Room category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const getBookings = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;
  if (!tenantId) {
    res.status(400).json({ success: false, error: 'Tenant context missing' });
    return;
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { tenantId },
      include: {
        guest: true,
        roomCategory: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      data: bookings.map(b => ({
        id: b.id,
        reference: b.bookingReference,
        guest: {
          firstName: b.guest.firstName,
          lastName: b.guest.lastName,
          phoneNumber: b.guest.phoneNumber
        },
        roomCategory: {
          name: b.roomCategory.name
        },
        checkIn: format(b.checkIn, 'yyyy-MM-dd'),
        checkOut: format(b.checkOut, 'yyyy-MM-dd'),
        nights: b.nightsCount,
        guests: b.guestCount,
        amount: Number(b.totalAmountPaid),
        status: b.status,
        createdAt: format(b.createdAt, 'yyyy-MM-dd HH:mm')
      }))
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
