import dotenv from 'dotenv';
import path from 'path';

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// ─────────────────────────────────────────────
// Environment variable schema & validation
// ─────────────────────────────────────────────

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value || value.trim() === '') {
    throw new Error(
      `[ENV ERROR] Missing required environment variable: "${key}"\n` +
        `  → Copy .env.example to .env and fill in all required values.`
    );
  }
  return value.trim();
}

function optionalEnv(key: string, defaultValue = ''): string {
  return (process.env[key] ?? defaultValue).trim();
}

// ─────────────────────────────────────────────
// Exported config object (single source of truth)
// ─────────────────────────────────────────────

export const config = {
  // ── App ──────────────────────────────────────
  NODE_ENV: optionalEnv('NODE_ENV', 'development'),
  PORT: parseInt(optionalEnv('PORT', '3000'), 10),

  // ── Database ─────────────────────────────────
  DATABASE_URL: requireEnv('DATABASE_URL'),

  // ── Redis ────────────────────────────────────
  REDIS_URL: requireEnv('REDIS_URL'),

  // ── Telegram Bot (Single dev token) ──────────
  TELEGRAM_BOT_TOKEN: requireEnv('TELEGRAM_BOT_TOKEN'),

  // ── Stripe ───────────────────────────────────
  STRIPE_SECRET_KEY: requireEnv('STRIPE_SECRET_KEY'),
  STRIPE_WEBHOOK_SECRET: requireEnv('STRIPE_WEBHOOK_SECRET'),
  STRIPE_PROVIDER_TOKEN: optionalEnv('STRIPE_PROVIDER_TOKEN'),

  // ── Auth ─────────────────────────────────────
  JWT_SECRET: requireEnv('JWT_SECRET'),

  // ── AWS S3 ───────────────────────────────────
  AWS_S3_BUCKET: requireEnv('AWS_S3_BUCKET'),
  AWS_ACCESS_KEY_ID: requireEnv('AWS_ACCESS_KEY_ID'),
  AWS_SECRET_ACCESS_KEY: requireEnv('AWS_SECRET_ACCESS_KEY'),
  AWS_REGION: optionalEnv('AWS_REGION', 'us-east-1'),

  // ── Email (SendGrid) ─────────────────────────
  SENDGRID_API_KEY: requireEnv('SENDGRID_API_KEY'),

  // ── Encryption ───────────────────────────────
  ENCRYPTION_KEY: requireEnv('ENCRYPTION_KEY'), // 32-byte hex string

  // ── Webhook Public URL ───────────────────────
  WEBHOOK_BASE_URL: optionalEnv('WEBHOOK_BASE_URL'), // e.g. https://api.yourdomain.com

  // ── Super Admin ──────────────────────────────
  SUPER_ADMIN_EMAIL: requireEnv('SUPER_ADMIN_EMAIL'),
  SUPER_ADMIN_PASSWORD_HASH: requireEnv('SUPER_ADMIN_PASSWORD_HASH'),

  // ── OpenAI (Phase 8 — optional) ──────────────
  OPENAI_API_KEY: optionalEnv('OPENAI_API_KEY'),
} as const;

export type Config = typeof config;
