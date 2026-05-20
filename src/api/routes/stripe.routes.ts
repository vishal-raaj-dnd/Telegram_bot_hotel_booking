import { Router } from 'express';
import { stripeWebhook } from '../controllers/stripe.controller';

const router = Router();

// Note: express.raw() MUST be applied before this route in app.ts
router.post('/webhook', stripeWebhook);

export default router;
