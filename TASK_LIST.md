# ✅ HotelBot SaaS — Complete Task List

> Each task includes: **Priority** (P0=Critical / P1=High / P2=Medium), **Effort** (S=0.5d / M=1d / L=2-3d / XL=4-5d), **Phase**, and **Dependencies**.

---

## PHASE 0 — Project Setup & Foundation

### TASK-001: Initialize Backend Repository
- **Priority**: P0 | **Effort**: S
- **Description**: Create a new Node.js + TypeScript project using `npm init`. Install core dependencies: `express`, `typescript`, `ts-node`, `dotenv`, `prisma`, `@prisma/client`, `telegraf`, `ioredis`.
- **Acceptance Criteria**:
  - `npm run dev` starts a server on port 3000
  - `GET /health` returns `{ status: "ok" }`
  - TypeScript strict mode enabled
  - ESLint + Prettier configured

### TASK-002: Configure PostgreSQL + Prisma
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-001
- **Description**: Set up a local PostgreSQL instance (Docker or local install). Initialize Prisma and write the full schema (tenants, tenant_users, guests, tenant_guests, room_categories, rooms, bookings, booking_events).
- **Acceptance Criteria**:
  - `npx prisma migrate dev` runs without errors
  - `npx prisma studio` shows all 8 tables
  - All foreign keys and indexes are present

### TASK-003: Configure Redis Connection
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-001
- **Description**: Set up a local Redis instance (Docker). Create a shared `RedisService` wrapper using `ioredis`. Implement `get`, `set`, `del`, and `setex` methods.
- **Acceptance Criteria**:
  - `RedisService.set("test", "value", 60)` stores and `get` retrieves it
  - Connection error is handled gracefully with logs

### TASK-004: Environment Variable Setup
- **Priority**: P0 | **Effort**: S
- **Description**: Create `.env.example` with all required variables: `DATABASE_URL`, `REDIS_URL`, `TELEGRAM_BOT_TOKEN` (for dev), `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `JWT_SECRET`, `AWS_S3_BUCKET`, `SENDGRID_API_KEY`. Load via `dotenv`.
- **Acceptance Criteria**:
  - App fails with descriptive error on missing required env vars
  - `.env` is in `.gitignore`

---

## PHASE 1 — Core Bot Development

### TASK-005: First Telegraf Bot (Development Polling)
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-001, TASK-003
- **Description**: Set up a Telegraf bot instance using a hardcoded single `BOT_TOKEN` for development. Implement `/start` command that sends a welcome message with an inline keyboard (Book a Room, My Bookings, Help).
- **Acceptance Criteria**:
  - Bot responds to `/start` within 2 seconds
  - Inline keyboard buttons appear with correct labels
  - Pressing each button triggers a distinct response

### TASK-006: Redis Session Middleware
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-003, TASK-005
- **Description**: Integrate `telegraf-session-redis` (or custom middleware) so that `ctx.session` persists user state in Redis. Key format: `session:<bot_token>:<user_telegram_id>`. Set TTL to 30 minutes.
- **Acceptance Criteria**:
  - `ctx.session.test = "hello"` persists across multiple messages
  - Session auto-expires after 30 minutes of inactivity
  - Sending `/start` clears any stale session state

### TASK-007: Inline Date Picker Calendar
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-005
- **Description**: Build or integrate an inline calendar keyboard for date selection. The calendar should allow navigation between months, disable past dates, and return a date string `YYYY-MM-DD` when a date is selected.
- **Acceptance Criteria**:
  - Past dates are un-clickable (shown as disabled)
  - Month navigation (Prev/Next) works
  - Clicking a date stores value in `ctx.session.booking.checkIn`

### TASK-008: Booking Scene — Steps 1 to 5
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-006, TASK-007
- **Description**: Implement the first 5 steps of the `BookingScene` as a Telegraf Wizard Scene:
  1. Show check-in calendar
  2. Show check-out calendar (must be after check-in)
  3. Ask number of guests (inline buttons: 1, 2, 3, 4+)
  4. Query available room categories from DB and display as cards with images
  5. User taps "Select" on a room, save `categoryId` to session
- **Acceptance Criteria**:
  - Scene cannot advance with invalid dates (check-out before check-in)
  - Room cards show: image, name, price per night, max guests
  - If no rooms available, inform user and exit scene

### TASK-009: Booking Scene — Steps 6 to 10 (Confirmation + Payment)
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-008
- **Description**: Continue the BookingScene:
  6. Show full booking summary (dates, room, total price, nights count)
  7. Request guest phone number via Telegram's `request_contact` button
  8. Save phone to `guests` table if not already present
  9. Send Telegram Invoice using `ctx.replyWithInvoice()`
  10. Handle `pre_checkout_query` — run availability check and approve/decline
  11. Handle `successful_payment` — create booking record in DB, send confirmation message
- **Acceptance Criteria**:
  - Invoice shows correct amount
  - `pre_checkout_query` declines if room is unavailable
  - Booking `booking_reference` is a unique alphanumeric code (e.g., `GRD-2405-XK91`)

### TASK-010: Anti-Double-Booking Transaction
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-009
- **Description**: When handling `pre_checkout_query`, run this atomic flow:
  1. Acquire Redis lock key `lock:<room_category_id>:<check_in>:<check_out>` (5-minute TTL)
  2. Open PostgreSQL transaction
  3. `SELECT` inventory count for the category
  4. Count overlapping `confirmed`/`pending` bookings
  5. If inventory available → approve. Otherwise → decline and release lock.
  6. On `successful_payment` → commit booking, release lock.
- **Acceptance Criteria**:
  - Two simultaneous users cannot book the same last room
  - Lock is always released (even on error) using try/finally
  - Unit tests cover: available, sold-out, and error cases

### TASK-011: My Bookings Scene
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: Implement `MyBookingsScene`. Fetch all bookings for the current `guest.telegram_id`. Display each booking as a formatted message: hotel name, room name, dates, total paid, status. Add "Cancel Booking" button for upcoming bookings.
- **Acceptance Criteria**:
  - Bookings listed from newest to oldest
  - Cancellation only allowed if check-in is >24 hours away
  - Cancellation updates DB status to `cancelled` and triggers Stripe refund (if applicable)

### TASK-012: Help / Support Scene
- **Priority**: P2 | **Effort**: S | **Depends on**: TASK-005
- **Description**: Create a `SupportScene` that displays hotel contact information (phone, email, WhatsApp link) fetched from `tenants.settings`. Add a "Send us a message" flow that collects the guest's message and optionally forwards it to the hotel owner's email.
- **Acceptance Criteria**:
  - Contact info is tenant-specific (not hardcoded)
  - Guest message is logged in DB and optionally emailed to hotel

---

## PHASE 2 — Multi-Tenancy Engine

### TASK-013: Webhook Server Setup
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-001
- **Description**: Create an Express route `POST /webhook/:botToken`. This is the single endpoint for all tenants. Validate the `:botToken` format. Pass the raw body to Telegraf's `handleUpdate()` method.
- **Acceptance Criteria**:
  - Invalid tokens return `404` immediately
  - Valid webhook updates are processed successfully
  - Use `express.raw()` body parser for this route (required for Telegraf)

### TASK-014: Tenant Lookup Middleware
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-013, TASK-002
- **Description**: Build middleware that extracts `:botToken` from the route, queries `tenants` table for a matching record, checks `subscription_status` is `active` or `trialing`, and injects `tenant` object into the request context. Cache tenant lookup in Redis (TTL: 5 minutes) to avoid DB hit on every message.
- **Acceptance Criteria**:
  - Suspended/cancelled tenants receive a "service unavailable" bot message
  - Cache invalidated when tenant record is updated
  - `null` tenant token returns 404

### TASK-015: Scoped Bot Factory
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-014, TASK-005
- **Description**: Refactor single-bot code into a `BotFactory` that creates and caches a `Telegraf` instance per `bot_token`. All scenes and handlers receive `tenant_id` via middleware so every DB query is automatically scoped to the correct hotel.
- **Acceptance Criteria**:
  - 10 different hotel bots can operate simultaneously without interference
  - A message to Hotel A's bot cannot access Hotel B's room data
  - `BotFactory.getBot(token)` returns cached instance on subsequent calls

### TASK-016: Dynamic Webhook Registration
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-015
- **Description**: Create an internal service `WebhookService.register(tenant)` that calls the Telegram API (`setWebhook`) for a given tenant's bot token, pointing it at `https://api.yourdomain.com/webhook/<token>`. Also implement `WebhookService.unregister(tenant)` for when a hotel cancels.
- **Acceptance Criteria**:
  - Called automatically after a new tenant inputs their bot token in the dashboard
  - Called automatically on tenant suspension/cancellation
  - Errors (e.g., invalid token) are caught and surfaced to the hotel owner

### TASK-017: Tenant CRUD API
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-002
- **Description**: Build REST endpoints (Super-admin only): `GET /api/v1/tenants`, `POST /api/v1/tenants`, `GET /api/v1/tenants/:id`, `PATCH /api/v1/tenants/:id`, `DELETE /api/v1/tenants/:id`. Include filtering by `subscription_status`.
- **Acceptance Criteria**:
  - All endpoints protected by super-admin JWT middleware
  - `DELETE` soft-deletes (sets `is_active = false`), does not destroy data
  - Returns paginated results

---

## PHASE 3 — Payments

### TASK-018: Stripe Account & Config
- **Priority**: P0 | **Effort**: S
- **Description**: Create Stripe account. Set up Telegram Payments provider (link Stripe to Telegram via BotFather `@Stripe`). Store `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in env vars. Install `stripe` npm package.
- **Acceptance Criteria**:
  - Stripe test mode active
  - `stripe.paymentIntents.create()` works from Node.js
  - Telegram bot test payment works end-to-end using test card

### TASK-019: Stripe Webhook Handler
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-018
- **Description**: Create `POST /stripe/webhook` endpoint. Verify the `stripe-signature` header. Handle events: `invoice.payment_succeeded`, `invoice.payment_failed`, `customer.subscription.deleted`, `customer.subscription.updated`.
- **Acceptance Criteria**:
  - Replay of old events is idempotent (no duplicate DB writes)
  - Failed payment triggers email warning to hotel owner
  - Cancelled subscription sets `tenants.subscription_status = 'cancelled'`

### TASK-020: PDF Receipt Generation
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: On `successful_payment`, generate a PDF receipt with: hotel logo, guest name, booking reference, room details, dates, amount paid. Use `pdf-lib` or `puppeteer`. Upload to S3 and send the public URL back to the guest via Telegram.
- **Acceptance Criteria**:
  - PDF is readable and professionally formatted
  - Sent to guest within 10 seconds of payment confirmation
  - S3 URL is signed and expires after 7 days

### TASK-021: Email Confirmation
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-020
- **Description**: After successful booking, send a confirmation email to the hotel owner (not the guest, as guests use Telegram) with booking details and PDF receipt link. Use SendGrid or Resend.
- **Acceptance Criteria**:
  - Email arrives within 1 minute of booking
  - Email is HTML formatted with hotel branding colors (from `tenants.settings`)

---

## PHASE 4 — Hotel Dashboard (Frontend)

### TASK-022: Initialize Next.js Dashboard Project
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-017
- **Description**: Create a new Next.js 14 project using `npx create-next-app@latest`. Use App Router, TypeScript, and Tailwind CSS. Set up folder structure: `app/`, `components/`, `services/`, `hooks/`.
- **Acceptance Criteria**:
  - `npm run dev` runs on port 3001
  - Basic layout with sidebar navigation renders
  - API base URL configured via `.env.local`

### TASK-023: Dashboard Authentication (JWT)
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-022
- **Description**: Implement backend auth endpoints: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`. Frontend: login page, JWT stored in `httpOnly` cookie, protected route middleware, auto-refresh logic.
- **Acceptance Criteria**:
  - Unauthenticated users redirected to `/login`
  - Access token expires in 15 minutes; refresh token in 7 days
  - Logout clears all cookies

### TASK-024: Room Management UI
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-023
- **Description**: Build CRUD UI for room categories. Pages: `/dashboard/rooms` (list), `/dashboard/rooms/new` (create form), `/dashboard/rooms/:id/edit` (edit). Include image upload via S3 presigned URL. Fields: name, description, price, currency, max guests, amenities checklist.
- **Acceptance Criteria**:
  - Images preview before upload
  - S3 presigned URL flow: frontend requests URL from backend, uploads directly to S3
  - Room can be toggled active/inactive without deleting

### TASK-025: Bookings View UI
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-023
- **Description**: Build `/dashboard/bookings` table page. Columns: Reference, Guest (first name + phone), Room, Check-in, Check-out, Amount, Status. Filters: status dropdown, date range picker. Export to CSV button.
- **Acceptance Criteria**:
  - Table is paginated (25 per page)
  - CSV export downloads correctly
  - Clicking a row shows booking detail panel (slide-over)

### TASK-026: Overview / Analytics Dashboard
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-025
- **Description**: Build `/dashboard/overview`. Show: Today's bookings, This month's revenue, Occupancy rate (confirmed bookings / total room inventory), Recent bookings list. Backend: aggregate SQL queries.
- **Acceptance Criteria**:
  - All stats load in under 2 seconds
  - Revenue shows in tenant's configured currency
  - Data refreshes every 5 minutes (SWR or React Query)

### TASK-027: Bot Settings UI
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-023
- **Description**: Build `/dashboard/settings/bot`. Fields: Welcome message (textarea), Bot username (read-only), Timezone selector, Currency selector, Notification email. On save, PATCH `tenants.settings` and invalidate Redis tenant cache.
- **Acceptance Criteria**:
  - Changes reflect in the live bot within 5 minutes (after cache TTL)
  - Bot username field shows live Telegram link to the bot

### TASK-028: Staff Management UI
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-023
- **Description**: Build `/dashboard/settings/staff`. List current team members with their roles. Invite by email form (sends invite link). Remove staff member. Role can be changed (owner only).
- **Acceptance Criteria**:
  - Invite email contains a unique one-time token (expires in 48 hours)
  - Removing yourself (owner) is blocked if you're the only owner
  - Role matrix enforced on API level

---

## PHASE 5 — SaaS Billing

### TASK-029: Stripe Subscription Checkout
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-018
- **Description**: Build the SaaS subscription flow. Backend: `POST /api/v1/billing/create-checkout-session` creates a Stripe Checkout session for the chosen plan (Starter/Pro/Enterprise). Frontend: Pricing page on marketing site with "Subscribe" buttons.
- **Acceptance Criteria**:
  - Redirects to Stripe-hosted checkout
  - On success, Stripe webhook sets tenant active
  - On cancel, user returns to pricing page

### TASK-030: Billing Portal UI
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-029
- **Description**: Add a "Manage Billing" button in the dashboard that calls `POST /api/v1/billing/portal-session` and redirects to the Stripe Customer Portal. Hotel owner can change plan, update card, or cancel from there.
- **Acceptance Criteria**:
  - Stripe Portal loads successfully
  - After changes, tenant record is updated via webhook (TASK-019)

### TASK-031: Trial Period Logic
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-029
- **Description**: New tenants get a 14-day free trial. Stripe handles this natively via `trial_period_days`. Dashboard should show "Trial ends in X days" banner. Bot should still work during trial. On trial expiry without payment method, set status to `past_due`.
- **Acceptance Criteria**:
  - Trial banner visible in dashboard
  - Bot continues working during trial
  - Trial expiry triggers suspension flow (same as TASK-019)

---

## PHASE 6 — Super Admin

### TASK-032: Super Admin Dashboard
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-022, TASK-017
- **Description**: Build a protected `/admin` section (separate login). Pages: Tenant list with status badges, MRR (Monthly Recurring Revenue) counter, System health panel (DB connections, Redis uptime, active webhooks). Can manually suspend/activate tenants.
- **Acceptance Criteria**:
  - Accessible only to super-admin credentials (stored in separate env var)
  - MRR computed from active Stripe subscriptions
  - Suspend action calls `WebhookService.unregister()` and sets `is_active = false`

---

## PHASE 7 — Security & DevOps

### TASK-033: Input Validation & Rate Limiting
- **Priority**: P0 | **Effort**: M
- **Description**: Add `express-validator` for all REST API inputs. Add `express-rate-limit` (100 req/15min globally, 10/min for auth endpoints). Add `helmet.js` for HTTP security headers.
- **Acceptance Criteria**:
  - Malformed request bodies return `400` with readable error
  - Brute-force on login endpoint is blocked after 10 attempts (15-min lockout)

### TASK-034: Encryption of Sensitive Fields
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-002
- **Description**: Encrypt `tenants.telegram_bot_token` and `guests.phone_number` at rest using AES-256-GCM. Implement `encrypt()` and `decrypt()` utility functions. Use `ENCRYPTION_KEY` env variable.
- **Acceptance Criteria**:
  - Values in DB are unreadable ciphertext
  - Application reads/writes transparently via utility functions
  - Key rotation plan documented

### TASK-035: GDPR — Guest Data Deletion
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: Implement `/deletemydata` bot command. When triggered, anonymize the guest's record: set name to "Deleted User", phone to `null`, unlink from all future bookings. Historical bookings keep a `guest_id` for accounting but PII is removed. Send confirmation message.
- **Acceptance Criteria**:
  - Guest data unrecoverable after deletion
  - Existing bookings remain for hotel's accounting
  - Flow shown on `/start` first-time message as notice

### TASK-036: Docker Setup
- **Priority**: P0 | **Effort**: M
- **Description**: Create `Dockerfile` for the backend. Create `docker-compose.yml` for local dev with services: `api`, `postgres`, `redis`. Create `.dockerignore`. Ensure `npm run build` produces a runnable `dist/` folder.
- **Acceptance Criteria**:
  - `docker-compose up` starts entire local stack in one command
  - Production image is < 500MB
  - Health check defined in Dockerfile

### TASK-037: CI/CD Pipeline
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-036
- **Description**: Create `.github/workflows/deploy.yml`. Steps: Checkout → Install → Lint → Type-check → Run tests → Build Docker image → Push to registry → Deploy to production (Railway/Render/AWS).
- **Acceptance Criteria**:
  - Pull requests run lint + tests automatically
  - `main` branch merge triggers production deploy
  - Failed tests block merge (branch protection rule)

### TASK-038: Monitoring & Error Tracking
- **Priority**: P1 | **Effort**: S
- **Description**: Integrate Sentry for error tracking in both backend and frontend. Set up UptimeRobot to ping `/health` every 5 minutes. Create a basic Grafana dashboard for request rate and DB query latency.
- **Acceptance Criteria**:
  - Unhandled exceptions automatically reported to Sentry with stack trace
  - Downtime triggers email/SMS alert within 5 minutes

---

## PHASE 8 — Post-Launch Growth Features

### TASK-039: AI NLP Integration (Pro Tier)
- **Priority**: P2 | **Effort**: XL
- **Description**: Integrate OpenAI API to parse free-text messages like "book a room for next Friday for 2 people". Extract entities: check-in date, check-out date, guest count. Fall back to manual calendar if extraction fails. Gate this feature behind Pro/Enterprise tier check.
- **Acceptance Criteria**:
  - Works for common date formats ("next Tuesday", "June 5th", "in 3 days")
  - Confidence below 70% falls back to structured calendar
  - Feature flag `ai_nlp` checked before calling OpenAI API

### TASK-040: Multi-Language Support (i18n)
- **Priority**: P2 | **Effort**: L
- **Description**: Add `i18next` to the bot. Detect `ctx.from.language_code`. Support: English (default), Arabic, French. All bot message strings moved to locale JSON files. Tenant can set a default language in settings.
- **Acceptance Criteria**:
  - Bot auto-detects language on first message
  - Guest can manually switch language via `/language` command
  - New languages can be added by adding a new locale file only

### TASK-041: Broadcast Messaging (Pro Tier)
- **Priority**: P2 | **Effort**: M
- **Description**: Add a "Send Announcement" feature in the dashboard. Hotel sends a message to all opted-in guests. Backend uses a BullMQ queue to send messages at max 30/second (Telegram rate limit). Show delivery stats.
- **Acceptance Criteria**:
  - Respects Telegram's rate limits (no flood errors)
  - Only sends to guests with `opt_in_notifications = true`
  - Dashboard shows sent/failed count after broadcast

### TASK-042: Post-Stay Review Collection
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-009
- **Description**: 24 hours after a guest's `check_out_date`, the bot automatically sends a review request ("How was your stay at X?"). Guest rates 1–5 stars via inline buttons and can add a text comment. Reviews stored and visible in the hotel dashboard.
- **Acceptance Criteria**:
  - Triggered by a scheduled job (cron) running every hour
  - Only sent once per booking
  - Hotel dashboard shows average rating and review list

---

## Summary

| Phase | Tasks | Approx. Duration |
|---|---|---|
| 0 — Setup | 001–004 | Week 1 |
| 1 — Core Bot | 005–012 | Weeks 2–5 |
| 2 — Multi-Tenancy | 013–017 | Weeks 6–8 |
| 3 — Payments | 018–021 | Weeks 9–10 |
| 4 — Dashboard | 022–028 | Weeks 11–14 |
| 5 — SaaS Billing | 029–031 | Week 15 |
| 6 — Super Admin | 032 | Week 16 |
| 7 — Security/DevOps | 033–038 | Weeks 17–18 |
| 8 — Growth | 039–042 | Post-launch |

**Total Core Tasks**: 38 | **Growth Tasks**: 4 | **Total**: 42
