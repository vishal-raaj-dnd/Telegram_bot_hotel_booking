import express, { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { config } from '../config/env';
import type { ApiResponse } from '../types/index';

// ─────────────────────────────────────────────────────────────────
// Express app factory
// ─────────────────────────────────────────────────────────────────

export function createApp(): express.Application {
  const app = express();

  // ── Global Middleware ────────────────────────────────────────────
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));

  // ── Request logging ──────────────────────────────────────────────
  app.use((req: Request, _res: Response, next: NextFunction) => {
    logger.debug(`[HTTP] ${req.method} ${req.path}`);
    next();
  });

  // ── Health Check ─────────────────────────────────────────────────
  app.get('/health', (_req: Request, res: Response) => {
    const response: ApiResponse<{ uptime: number; env: string }> = {
      success: true,
      data: {
        uptime: process.uptime(),
        env: config.NODE_ENV,
      },
    };
    res.status(200).json(response);
  });

  // ── API Routes (registered later per phase) ──────────────────────
  // Phase 1: Bot polling route
  // Phase 2: Webhook route — POST /webhook/:botToken
  // Phase 3: Stripe webhook — POST /stripe/webhook
  // Phase 4: Dashboard API — /api/v1/*

  // ── 404 Catch-all ────────────────────────────────────────────────
  app.use((_req: Request, res: Response) => {
    const response: ApiResponse<null> = {
      success: false,
      error: 'Route not found',
    };
    res.status(404).json(response);
  });

  // ── Global Error Handler ─────────────────────────────────────────
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error('[HTTP] Unhandled error', { message: err.message, stack: err.stack });
    const response: ApiResponse<null> = {
      success: false,
      error:
        config.NODE_ENV === 'production'
          ? 'Internal server error'
          : err.message,
    };
    res.status(500).json(response);
  });

  return app;
}
