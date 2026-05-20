import Redis from 'ioredis';
import { config } from '@config/env';
import { logger } from '@utils/logger';

// ─────────────────────────────────────────────────────────────────
// Redis service — with automatic In-Memory fallback for dev
// ─────────────────────────────────────────────────────────────────

class RedisService {
  private client: Redis;
  private isMock = false;
  private mockStore = new Map<string, { value: string; expiry?: number }>();

  constructor() {
    this.client = new Redis(config.REDIS_URL, {
      lazyConnect: true,
      retryStrategy: (times: number) => {
        // Only try 2 times before giving up and switching to mock in dev
        if (times > 2) {
          return null; // Stop retrying
        }
        const delay = Math.min(times * 200, 1000);
        logger.warn(`[Redis] Reconnecting... attempt ${times} (delay: ${delay}ms)`);
        return delay;
      },
      maxRetriesPerRequest: 1,
    });

    this.client.on('connect', () => {
      this.isMock = false;
      logger.info('[Redis] Connected successfully');
    });
    this.client.on('error', (err: Error) => {
      logger.error('[Redis] Connection error', { error: err.message });
    });
    this.client.on('close', () => {
      logger.warn('[Redis] Connection closed');
    });
  }

  async connect(): Promise<void> {
    try {
      logger.info(`[Redis] Attempting connection to ${config.REDIS_URL}...`);
      await this.client.connect();
    } catch (err: any) {
      logger.warn(`[Redis] Failed to connect to Redis server: ${err.message}.`);
      logger.info('[Redis] Falling back to In-Memory Store (no Redis dependency)');
      this.isMock = true;
    }
  }

  // ── Core Operations ────────────────────────────────────────────

  /** Get a value by key. Returns null if not found. */
  async get(key: string): Promise<string | null> {
    if (this.isMock) {
      const entry = this.mockStore.get(key);
      if (!entry) return null;
      if (entry.expiry && Date.now() > entry.expiry) {
        this.mockStore.delete(key);
        return null;
      }
      return entry.value;
    }
    return this.client.get(key);
  }

  /** Set a value. */
  async set(key: string, value: string): Promise<void> {
    if (this.isMock) {
      this.mockStore.set(key, { value });
      return;
    }
    await this.client.set(key, value);
  }

  /** Set a value with TTL in seconds. */
  async setex(key: string, ttlSeconds: number, value: string): Promise<void> {
    if (this.isMock) {
      const expiry = Date.now() + ttlSeconds * 1000;
      this.mockStore.set(key, { value, expiry });
      return;
    }
    await this.client.setex(key, ttlSeconds, value);
  }

  /** Delete a key. */
  async del(key: string): Promise<void> {
    if (this.isMock) {
      this.mockStore.delete(key);
      return;
    }
    await this.client.del(key);
  }

  /** Set key only if it does not exist (atomic, used for locks). Returns true if set. */
  async setnx(key: string, value: string, ttlSeconds: number): Promise<boolean> {
    if (this.isMock) {
      const entry = this.mockStore.get(key);
      if (entry) {
        // Check if existing key expired
        if (entry.expiry && Date.now() > entry.expiry) {
          this.mockStore.delete(key);
        } else {
          return false; // Key exists and not expired
        }
      }
      const expiry = Date.now() + ttlSeconds * 1000;
      this.mockStore.set(key, { value, expiry });
      return true;
    }
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
    if (this.isMock) {
      this.mockStore.clear();
      logger.info('[Redis] Mock store cleared');
      return;
    }
    await this.client.quit();
    logger.info('[Redis] Disconnected gracefully');
  }
}

// Export singleton
export const redisService = new RedisService();
