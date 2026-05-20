# 🏨 HotelBot SaaS — Multi-Tenant Telegram Hotel Booking Platform

> A production-ready, multi-tenant SaaS platform that enables hotels to offer **instant room booking directly inside Telegram** — powered by Node.js, TypeScript, Prisma 7, Redis, and Stripe.

---

## 📌 Project Status

> **Phase 1 Complete (~30% of full roadmap)**
> The core bot engine, booking flow, payment integration, and infrastructure are fully operational. Multi-tenancy, dashboard API, and admin UI are upcoming.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                  Telegram Bot (Telegraf)                 │
│   /start → Main Menu → Booking Wizard → Stripe Invoice  │
└───────────────────┬─────────────────────────────────────┘
                    │
         ┌──────────▼──────────┐
         │   Express API       │  ← Health check, webhooks
         │   (src/api/app.ts)  │
         └──────────┬──────────┘
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
  PostgreSQL      Redis       Winston
  (Prisma 7)   (Sessions,    (Structured
               Locks, Cache)   Logging)
```

---

## ✅ What's Been Built (Phase 0 + Phase 1)

### ⚙️ Phase 0 — Infrastructure & Scaffolding

| Component | Details |
|-----------|---------|
| **TypeScript** | Strict mode, path aliases (`@config/*`, `@bot/*`, `@services/*`, etc.) |
| **Prisma 7** | PostgreSQL schema with 8 entities, `prisma.config.ts` based setup |
| **Redis** | `RedisService` singleton with JSON caching, session helpers, distributed locks |
| **Logger** | Winston with file rotation, dev/prod formatting |
| **Docker** | `docker-compose.yml` for local PostgreSQL + Redis |
| **Express API** | App factory, `/health` endpoint, global error handler |
| **Security** | AES-256-GCM encryption for sensitive data (phone numbers, bot tokens) |
| **Env Config** | `config/env.ts` with `requireEnv` / `optionalEnv` schema validation |

### 🤖 Phase 1 — Core Bot Development

| Feature | File | Description |
|---------|------|-------------|
| **Bot Entry** | `src/bot/index.ts` | Dev polling bot, graceful shutdown |
| **Redis Sessions** | `src/bot/middleware/session.ts` | Stateless sessions backed by Redis (30min TTL) |
| **Main Menu** | `src/bot/keyboards/main-menu.ts` | Inline keyboard with Book/My Bookings/Support |
| **Inline Calendar** | `src/bot/keyboards/calendar.ts` | Month-navigable date picker using `date-fns` |
| **Booking Wizard** | `src/bot/scenes/booking.scene.ts` | 5-step wizard: dates → guests → rooms → contact → payment |
| **My Bookings** | `src/bot/scenes/my-bookings.scene.ts` | View all bookings, cancel if >24h before check-in |
| **Support Scene** | `src/bot/scenes/support.scene.ts` | Hotel contact info + free-text message to staff |
| **Payment Flow** | `src/bot/index.ts` | `pre_checkout_query` with Redis lock + DB overlap check, `successful_payment` persists booking |

---

## 🗄️ Database Schema

8 core Prisma models:

- **Tenant** — Each hotel is a tenant with isolated data
- **Guest** — Telegram users; phone number stored AES-256-GCM encrypted
- **RoomCategory** — Room types with pricing, capacity, inventory
- **Booking** — Full booking record with status lifecycle
- **Payment** — Payment records linked to Stripe
- **BotSession** — Webhook/session metadata per tenant
- **Notification** — Staff notification queue
- **AuditLog** — Immutable audit trail

---

## 🔒 Anti-Double-Booking System

When a user confirms payment:

1. `pre_checkout_query` fires → Redis distributed lock acquired (5-min TTL)
2. PostgreSQL transaction counts overlapping confirmed/pending bookings
3. If inventory available → `answerPreCheckoutQuery(true)` → Stripe charges card
4. `successful_payment` event → booking record created, lock released

---

## 🗂️ Project Structure

```
src/
├── api/
│   └── app.ts              # Express factory, health check
├── bot/
│   ├── context.ts          # Telegraf custom Context type
│   ├── index.ts            # Bot setup, payment handlers
│   ├── keyboards/
│   │   ├── calendar.ts     # Inline date picker
│   │   └── main-menu.ts    # Main menu keyboard
│   ├── middleware/
│   │   └── session.ts      # Redis session middleware
│   └── scenes/
│       ├── booking.scene.ts      # Full booking wizard
│       ├── my-bookings.scene.ts  # View & cancel bookings
│       └── support.scene.ts     # Help & contact
├── config/
│   └── env.ts              # Environment variable schema
├── db/
│   └── prisma.ts           # Prisma singleton client
├── services/
│   └── redis.service.ts    # Redis singleton with helpers
├── types/
│   └── index.ts            # Shared TypeScript types
├── utils/
│   ├── crypto.ts           # AES-256-GCM encrypt/decrypt
│   └── logger.ts           # Winston logger
└── index.ts                # Application bootstrap
prisma/
└── schema.prisma           # Database schema
prisma.config.ts            # Prisma 7 config
docker-compose.yml          # Local dev stack
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose

### 1. Clone & Install
```bash
git clone https://github.com/vishal-raaj-dnd/Telegram_bot_hotel_booking.git
cd Telegram_bot_hotel_booking
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Fill in your values in .env
```

Key variables:
```env
DATABASE_URL=postgresql://hotelbot:hotelbot@localhost:5432/hotelbot
REDIS_URL=redis://localhost:6379
TELEGRAM_BOT_TOKEN=your_bot_token_from_botfather
STRIPE_SECRET_KEY=sk_test_...
ENCRYPTION_KEY=32_char_hex_string
```

### 3. Start Infrastructure
```bash
docker-compose up -d   # Starts PostgreSQL + Redis
```

### 4. Run Database Migrations
```bash
npm run db:generate    # Generate Prisma client
npm run db:migrate     # Apply schema migrations
```

### 5. Start Development Server
```bash
npm run dev
```

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot-reload |
| `npm run build` | Compile TypeScript |
| `npm run type-check` | TypeScript strict check (no emit) |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run DB migrations |
| `npm run db:studio` | Open Prisma Studio |

---

## 🗺️ Roadmap

| Phase | Status | Description |
|-------|--------|-------------|
| 0 — Infrastructure | ✅ Complete | TypeScript, Prisma, Redis, Docker, Logger |
| 1 — Core Bot | ✅ Complete | Booking wizard, payments, sessions, scenes |
| 2 — Multi-Tenancy | 🔜 Next | BotFactory, dynamic webhook registration per hotel |
| 3 — Dashboard API | 🔜 Planned | REST API for hotel management portal |
| 4 — Admin UI | 🔜 Planned | Next.js dashboard for hotel owners |
| 5 — Notifications | 🔜 Planned | Email/SMS confirmations, staff alerts |
| 6 — Analytics | 🔜 Planned | Booking analytics, revenue reports |
| 7 — Deployment | 🔜 Planned | CI/CD, production Kubernetes/Render deploy |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js 20, TypeScript 6 (strict) |
| Bot Framework | Telegraf 4 |
| Database ORM | Prisma 7 + PostgreSQL |
| Cache / Sessions | Redis (ioredis) |
| Payments | Stripe via Telegram Payments API |
| Logger | Winston |
| Date Handling | date-fns |
| Security | AES-256-GCM (Node.js crypto) |
| Dev Tooling | nodemon, tsconfig-paths, ESLint, Prettier |
| Infrastructure | Docker + Docker Compose |

---

## 📄 License

ISC © 2026 HotelBot SaaS
