import { Request, Response, NextFunction } from 'express';
import { prisma } from '@db/prisma';
import { redisService } from '@services/redis.service';
import { logger } from '@utils/logger';

export async function tenantLookupMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.params.botToken as string;
  if (!token) {
    res.status(400).json({ error: 'Missing bot token' });
    return;
  }

  try {
    const cacheKey = `tenant:bot:${token}`;
    const cachedTenant = await redisService.get(cacheKey);

    let tenant = null;

    if (cachedTenant) {
      tenant = JSON.parse(cachedTenant);
    } else {
      tenant = await prisma.tenant.findFirst({ where: { telegramBotToken: token } });
      if (tenant) {
        await redisService.setex(cacheKey, 300, JSON.stringify(tenant)); // 5 mins cache
      }
    }

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    if (tenant.subscriptionStatus !== 'active' && tenant.subscriptionStatus !== 'trialing') {
      logger.warn(`[Webhook] Rejected: Tenant ${tenant.id} is ${tenant.subscriptionStatus}`);
      // Return 200 so Telegram stops retrying, but we don't process it.
      res.status(200).send('Tenant inactive');
      return;
    }

    // Inject tenant into request
    (req as any).tenant = tenant;
    next();
  } catch (error) {
    logger.error('[Webhook] Error in tenant lookup middleware', { error });
    res.status(500).json({ error: 'Internal server error' });
  }
}
