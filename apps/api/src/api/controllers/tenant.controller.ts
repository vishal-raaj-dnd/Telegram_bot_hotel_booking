import { Request, Response } from 'express';
import { prisma } from '@db/prisma';
import { WebhookService } from '@services/webhook.service';

export const getTenants = async (req: Request, res: Response) => {
  const { status, page = 1, limit = 25 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);

  const where: any = { isActive: true };
  if (status) {
    where.subscriptionStatus = status;
  }

  const [total, tenants] = await Promise.all([
    prisma.tenant.count({ where }),
    prisma.tenant.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' }
    })
  ]);

  res.json({ success: true, data: { tenants, total, page: Number(page), limit: Number(limit) } });
};

export const getTenant = async (req: Request, res: Response) => {
  const tenant = await prisma.tenant.findUnique({ where: { id: req.params.id as string } });
  if (!tenant || !tenant.isActive) {
    res.status(404).json({ success: false, error: 'Tenant not found' });
    return;
  }
  res.json({ success: true, data: tenant });
};

export const createTenant = async (req: Request, res: Response) => {
  const { name, telegramBotToken, subscriptionStatus = 'trialing', webhookBaseUrl } = req.body;
  
  try {
    const tenant = await prisma.tenant.create({
      data: {
        name,
        telegramBotToken, // Note: Encryption will be added in Phase 7
        subscriptionStatus
      }
    });

    if (webhookBaseUrl && telegramBotToken) {
      await WebhookService.register(tenant, webhookBaseUrl);
    }

    res.status(201).json({ success: true, data: tenant });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Failed to create tenant' });
  }
};

export const updateTenant = async (req: Request, res: Response) => {
  const { name, telegramBotToken, subscriptionStatus } = req.body;

  try {
    const tenant = await prisma.tenant.update({
      where: { id: req.params.id as string },
      data: {
        ...(name && { name }),
        ...(telegramBotToken && { telegramBotToken }),
        ...(subscriptionStatus && { subscriptionStatus })
      }
    });
    
    // If status changed to cancelled/suspended, unregister webhook
    if (subscriptionStatus === 'cancelled' || subscriptionStatus === 'past_due') {
        await WebhookService.unregister(tenant);
    }

    res.json({ success: true, data: tenant });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Failed to update tenant' });
  }
};

export const deleteTenant = async (req: Request, res: Response) => {
  try {
    // Soft delete
    const tenant = await prisma.tenant.update({
      where: { id: req.params.id as string },
      data: { isActive: false }
    });

    await WebhookService.unregister(tenant);

    res.json({ success: true, data: tenant });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Failed to delete tenant' });
  }
};
