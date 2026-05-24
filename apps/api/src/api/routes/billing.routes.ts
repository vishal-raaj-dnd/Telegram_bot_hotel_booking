import { Router } from 'express';
import { createCheckoutSession, createPortalSession } from '../controllers/billing.controller';
import { userAuthMiddleware } from '../middleware/userAuth.middleware';

const router = Router();

// Protected billing routes
router.post('/create-checkout-session', userAuthMiddleware as any, createCheckoutSession as any);
router.post('/portal-session', userAuthMiddleware as any, createPortalSession as any);

export default router;
