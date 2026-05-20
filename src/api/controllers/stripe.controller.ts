import { Request, Response } from 'express';
import Stripe from 'stripe';
import { config } from '@config/env';
import { prisma } from '@db/prisma';
import { logger } from '@utils/logger';
import { WebhookService } from '@services/webhook.service';

const stripe = new Stripe(config.STRIPE_SECRET_KEY, { apiVersion: '2026-04-22.dahlia' });

export const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];

  let event: any;

  try {
    // req.body must be a raw buffer
    event = stripe.webhooks.constructEvent(req.body, sig!, config.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    logger.error('[Stripe Webhook] Error verifying signature', { error: err.message });
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  try {
    switch (event.type) {
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as any;
        if (invoice.subscription) {
            const tenant = await prisma.tenant.findFirst({ where: { stripeCustomerId: invoice.customer as string } });
            if (tenant) {
                await prisma.tenant.update({
                    where: { id: tenant.id },
                    data: { subscriptionStatus: 'active' }
                });
                logger.info(`[Stripe Webhook] Activated subscription for tenant ${tenant.id}`);
            }
        }
        break;
      }
      
      case 'invoice.payment_failed': {
        const failedInvoice = event.data.object as any;
        if (failedInvoice.subscription) {
            const tenant = await prisma.tenant.findFirst({ where: { stripeCustomerId: failedInvoice.customer as string } });
            if (tenant) {
                const updatedTenant = await prisma.tenant.update({
                    where: { id: tenant.id },
                    data: { subscriptionStatus: 'past_due' }
                });
                await WebhookService.unregister(updatedTenant);
                logger.info(`[Stripe Webhook] Marked tenant ${tenant.id} as past_due`);
            }
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as any;
        const tenant = await prisma.tenant.findFirst({ where: { stripeCustomerId: subscription.customer as string } });
        if (tenant) {
            const updatedTenant = await prisma.tenant.update({
                where: { id: tenant.id },
                data: { subscriptionStatus: 'cancelled' }
            });
            await WebhookService.unregister(updatedTenant);
            logger.info(`[Stripe Webhook] Cancelled subscription for tenant ${tenant.id}`);
        }
        break;
      }

      default:
        logger.debug(`[Stripe Webhook] Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    logger.error('[Stripe Webhook] Processing error', { error });
    res.status(500).send('Internal Server Error');
  }
};
