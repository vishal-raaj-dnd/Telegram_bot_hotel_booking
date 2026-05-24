// Prisma 7: client is generated to shared packages/types
import { PrismaClient } from '@hotelbot/types';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { logger } from '@utils/logger';

// ─────────────────────────────────────────────────────────────────
// Prisma 7 Client Initialization with Driver Adapter
// ─────────────────────────────────────────────────────────────────

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  logger.error('[DB] DATABASE_URL environment variable is missing');
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// Instantiate client with adapter
export const prisma: PrismaClient = global.__prisma ?? new PrismaClient({ adapter } as any);

// Log slow queries in development using a polling check
if (process.env.NODE_ENV !== 'production') {
  logger.debug('[DB] Prisma client initialized (development mode with Driver Adapter)');
}

// Cache instance in development (avoids hot-reload creating many clients)
if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

export async function connectDatabase(): Promise<void> {
  await prisma.$connect();
  logger.info('[DB] PostgreSQL connected via Prisma (Driver Adapter)');
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  await pool.end();
  logger.info('[DB] PostgreSQL disconnected');
}
