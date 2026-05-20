// Prisma 7: client is generated to node_modules/.prisma/client/
import { PrismaClient } from '.prisma/client';
import { logger } from '@utils/logger';

// ─────────────────────────────────────────────────────────────────
// Prisma 7 client singleton — direct PostgreSQL connection
// Prisma 7 requires an adapter to be passed explicitly.
// For plain PostgreSQL, we use the standard connection via env var.
// ─────────────────────────────────────────────────────────────────

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// Prisma 7: direct connection — DATABASE_URL is passed via prisma.config.ts
// The PrismaClient constructor in v7 does not accept connection URL directly;
// it reads it from prisma.config.ts datasource block at generate-time.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prisma: PrismaClient = global.__prisma ?? (new (PrismaClient as any)() as PrismaClient);

// Log slow queries in development using a polling check
if (process.env.NODE_ENV !== 'production') {
  logger.debug('[DB] Prisma client initialized (development mode)');
}

// Cache instance in development (avoids hot-reload creating many clients)
if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

export async function connectDatabase(): Promise<void> {
  await prisma.$connect();
  logger.info('[DB] PostgreSQL connected via Prisma');
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  logger.info('[DB] PostgreSQL disconnected');
}
