import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// ─────────────────────────────────────────────────────────────────
// Prisma 7 configuration file
// Replaces the `url` field in datasource block of schema.prisma
// See: https://pris.ly/d/config-datasource
// ─────────────────────────────────────────────────────────────────

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.DATABASE_URL ?? '',
  },
});
