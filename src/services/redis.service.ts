import Redis from 'ioredis';
import { config } from '@config/env';
import { logger } from '@utils/logger';

// ─────────────────────────────────────────────────────────────────
// Redis service — thin wrapper around ioredis with typed helpers
// ─────────────────────────────────────────────────────────────────

class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis(config.REDIS_URL, {
      lazyConnect: true,
      retryStrategy: (times: number) => {
        const delay = Math.min(times * 200, 5000);
        logger.warn(`[Redis] Reconnecting... attempt ${times} (delay: ${delay}ms)`);
        return delay;
      },
      maxRetriesPerRequest: 3,
    });

    this.client.on('connect', () => logger.info('[Redis] Connected successfully'));
    this.client.on('error', (err: Error) => logger.error('[Redis] Connection error', { error: err.message }));
    this.client.on('close', () => logger.warn('[Redis] Connection closed'));
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  // ── Core Operations ────────────────────────────────────────────

  /** Get a value by key. Returns null if not found. */
  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  /** Set a value. */
  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  /** Set a value with TTL in seconds. */
  async setex(key: string, ttlSeconds: number, value: string): Promise<void> {
    await this.client.setex(key, ttlSeconds, value);
  }

  /** Delete a key. */
  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  /** Set key only if it does not exist (atomic, used for locks). Returns true if set. */
  async setnx(key: string, value: string, ttlSeconds: number): Promise<boolean> {
    const result = await this.client.set(key, value, 'EX', ttlSeconds, 'NX');
    return result === 'OK';
  }

  // ── JSON Helpers ──────────────────────────────────────────────

  async getJson<T>(key: string): Promise<T | null> {
    const raw = await this.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      logger.error(`[Redis] Failed to parse JSON for key: ${key}`);
      return null;
    }
  }

  async setJson<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    if (ttlSeconds) {
      await this.setex(key, ttlSeconds, serialized);
    } else {
      await this.set(key, serialized);
    }
  }

  // ── Session Helpers ───────────────────────────────────────────

  /** Session key format: session:<botToken>:<telegramUserId> */
  sessionKey(botToken: string, userId: number): string {
    return `session:${botToken}:${userId}`;
  }

  /** Tenant cache key */
  tenantKey(botToken: string): string {
    return `tenant:${botToken}`;
  }

  /** Distributed lock key for double-booking prevention */
  bookingLockKey(categoryId: string, checkIn: string, checkOut: string): string {
    return `lock:${categoryId}:${checkIn}:${checkOut}`;
  }

  // ── Utility ───────────────────────────────────────────────────

  /** Returns the raw ioredis client for advanced operations */
  getClient(): Redis {
    return this.client;
  }

  async quit(): Promise<void> {
    await this.client.quit();
    logger.info('[Redis] Disconnected gracefully');
  }
}

// Export singleton
export const redisService = new RedisService();
