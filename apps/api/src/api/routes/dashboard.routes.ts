import { Router } from 'express';
import { getAnalytics, getRooms, createRoom, updateRoom, deleteRoom, getBookings } from '../controllers/dashboard.controller';
import { userAuthMiddleware } from '../middleware/userAuth.middleware';

const router = Router();

// Apply auth middleware to all dashboard endpoints
router.use(userAuthMiddleware as any);

router.get('/analytics', getAnalytics as any);
router.get('/rooms', getRooms as any);
router.post('/rooms', createRoom as any);
router.patch('/rooms/:id', updateRoom as any);
router.delete('/rooms/:id', deleteRoom as any);
router.get('/bookings', getBookings as any);

export default router;
