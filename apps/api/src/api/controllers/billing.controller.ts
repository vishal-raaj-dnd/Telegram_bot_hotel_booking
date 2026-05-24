import { Response } from 'express';
import Stripe from 'stripe';
import { config } from '@config/env';
import { prisma } from '@db/prisma';
import { logger } from '@utils/logger';
import { UserRequest } from '../middleware/userAuth.middleware';

const stripe = new Stripe(config.STRIPE_SECRET_KEY, { apiVersion: '2026-04-22.dahlia' });

// Price mapping for B2B SaaS plans
const PLAN_PRICES: Record<string, string> = {
  starter: process.env.STRIPE_PRICE_STARTER || 'price_starter_placeholder',
  pro: process.env.STRIPE_PRICE_PRO || 'price_pro_placeholder',
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE || 'price_enterprise_placeholder',
};

export const createCheckoutSession = async (req: UserRequest, res: Response) => {
  const { plan } = req.body;
  const tenantId = req.user?.tenantId;

  if (!tenantId) {
    res.status(401).json({ success: false, error: 'Unauthorized' });
    return;
  }

  if (!plan || !['starter', 'pro', 'enterprise'].includes(plan)) {
    res.status(400).json({ success: false, error: 'Invalid plan selected. Must be starter, pro, or enterprise.' });
    return;
  }

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { tenantUsers: { where: { role: 'owner' } } },
    });

    if (!tenant) {
      res.status(404).json({ success: false, error: 'Tenant not found' });
      return;
    }

    const ownerEmail = tenant.tenantUsers[0]?.email || req.user?.email || '';

    // 1. Get or create Stripe Customer
    let stripeCustomerId = tenant.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: ownerEmail,
        name: tenant.name,
        metadata: {
          tenantId: tenant.id,
        },
      });
      stripeCustomerId = customer.id;
      
      // Update tenant in database
      await prisma.tenant.update({
        where: { id: tenant.id },
        data: { stripeCustomerId },
      });
    }

    // 2. Calculate remaining trial days
    const createdAt = new Date(tenant.createdAt);
    const trialDuration = 14 * 24 * 60 * 60 * 1000; // 14 days in ms
    const now = new Date();
    const timePassed = now.getTime() - createdAt.getTime();
    const timeLeft = trialDuration - timePassed;
    const remainingTrialDays = Math.max(0, Math.ceil(timeLeft / (24 * 60 * 60 * 1000)));

    // 3. Create Checkout Session
    const priceId = PLAN_PRICES[plan];
    
    const sessionConfig: any = {
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin || 'http://localhost:3001'}?billing=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'http://localhost:3001'}?billing=cancel`,
      metadata: {
        tenantId: tenant.id,
        plan,
      },
    };

    // If tenant has remaining trial days, add them to subscription
    if (remainingTrialDays > 0 && tenant.subscriptionStatus === 'trialing') {
      sessionConfig.subscription_data = {
        trial_period_days: remainingTrialDays,
        metadata: {
          tenantId: tenant.id,
          plan,
        },
      };
    } else {
      sessionConfig.subscription_data = {
        metadata: {
          tenantId: tenant.id,
          plan,
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({
      success: true,
      data: {
        url: session.url,
      },
    });
  } catch (error: any) {
    logger.error('[Billing] Create Checkout Session error', { error: error.message });
    res.status(500).json({ success: false, error: 'Failed to create subscription session' });
  }
};

export const createPortalSession = async (req: UserRequest, res: Response) => {
  const tenantId = req.user?.tenantId;

  if (!tenantId) {
    res.status(401).json({ success: false, error: 'Unauthorized' });
    return;
  }

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
    });

    if (!tenant) {
      res.status(404).json({ success: false, error: 'Tenant not found' });
      return;
    }

    if (!tenant.stripeCustomerId) {
      res.status(400).json({ 
        success: false, 
        error: 'No active Stripe billing profile found. Please subscribe to a plan first.' 
      });
      return;
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: tenant.stripeCustomerId,
      return_url: `${req.headers.origin || 'http://localhost:3001'}`,
    });

    res.json({
      success: true,
      data: {
        url: session.url,
      },
    });
  } catch (error: any) {
    logger.error('[Billing] Create Customer Portal error', { error: error.message });
    res.status(500).json({ success: false, error: 'Failed to create billing portal session' });
  }
};
