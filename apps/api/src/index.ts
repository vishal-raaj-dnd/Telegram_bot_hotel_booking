import { config } from '@config/env';
import { logger } from '@utils/logger';
import { connectDatabase, disconnectDatabase } from '@db/prisma';
import { redisService } from '@services/redis.service';
import { createApp } from '@api/app';
import { launchDevBot } from '@bot/index';

// ─────────────────────────────────────────────────────────────────
// Application Bootstrap
// ─────────────────────────────────────────────────────────────────

async function bootstrap(): Promise<void> {
  logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  logger.info('  HotelBot SaaS — Starting up...');
  logger.info(`  Environment : ${config.NODE_ENV}`);
  logger.info(`  Port        : ${config.PORT}`);
  logger.info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // ── 1. Connect to PostgreSQL ────────────────────────────────────
  await connectDatabase();

  // ── 2. Connect to Redis ─────────────────────────────────────────
  await redisService.connect();

  // ── 3. Create & start Express server ───────────────────────────
  const app = createApp();
  const server = app.listen(config.PORT, () => {
    logger.info(`[Server] Listening on http://localhost:${config.PORT}`);
    logger.info(`[Server] Health check: http://localhost:${config.PORT}/health`);
  });

  // ── 3.5. Start Bot (Development only) ───────────────────────────
  await launchDevBot();

  // ── 4. Graceful shutdown ────────────────────────────────────────
  const shutdown = async (signal: string): Promise<void> => {
    logger.warn(`[Server] ${signal} received — shutting down gracefully...`);
    server.close(async () => {
      await Promise.all([disconnectDatabase(), redisService.quit()]);
      logger.info('[Server] Shutdown complete');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGINT', () => void shutdown('SIGINT'));

  // ── 5. Handle unhandled rejections ─────────────────────────────
  process.on('unhandledRejection', (reason) => {
    logger.error('[Process] Unhandled rejection', { reason });
  });

  process.on('uncaughtException', (err) => {
    logger.error('[Process] Uncaught exception', { error: err.message, stack: err.stack });
    void shutdown('uncaughtException');
  });
}

bootstrap().catch((err: Error) => {
  console.error('[FATAL] Failed to start application:', err.message);
  process.exit(1);
});
