# ✅ HotelBot SaaS — Supplementary Task List (Part 2)

> Continuation of TASK_LIST.md. Tasks 043–090. Covers: Testing, Marketing Site, Onboarding, Notifications, Refunds, Tax, Coupons, Audit Logs, Documentation, Performance, PMS Integrations, and Ops Runbooks.

---

## PHASE 9 — Testing Strategy

### TASK-043: Unit Test Suite Setup
- **Priority**: P0 | **Effort**: M
- **Description**: Install and configure `Jest` + `ts-jest`. Create `__tests__/` folders co-located with each module. Write unit tests for all pure utility functions: `encrypt/decrypt`, `generateBookingReference`, `calculateTotalNights`, `isDateRangeOverlapping`.
- **Acceptance Criteria**:
  - `npm test` runs all tests
  - 100% coverage on utility functions
  - Tests run in under 30 seconds

### TASK-044: Service Layer Unit Tests
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-043
- **Description**: Write unit tests for all service classes: `BookingService`, `TenantService`, `RoomService`, `PaymentService`. Use `jest.mock()` to mock Prisma and Redis. Test all happy paths and error paths.
- **Acceptance Criteria**:
  - `BookingService.createBooking()` tested for: success, room unavailable, invalid dates
  - `TenantService.findByToken()` tested for: found, not found, suspended
  - Minimum 80% branch coverage on service layer

### TASK-045: Integration Tests (API Endpoints)
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-044
- **Description**: Use `supertest` to write integration tests against the actual Express app with a test PostgreSQL database (use `DATABASE_TEST_URL`). Test all REST endpoints for auth, rooms, and bookings. Run migrations on test DB before suite.
- **Acceptance Criteria**:
  - Each endpoint tested for: 200 success, 401 unauthorized, 404 not found, 400 bad input
  - Test DB is seeded with fixture data before each test run
  - Tests clean up after themselves (no leftover data)

### TASK-046: Bot Flow End-to-End Tests
- **Priority**: P1 | **Effort**: XL | **Depends on**: TASK-045
- **Description**: Use `telegraf-test` or a custom Telegraf mock context to simulate full bot conversation flows. Test the complete `BookingScene` flow from `/start` to `successful_payment`. Test `MyBookingsScene` and `SupportScene`.
- **Acceptance Criteria**:
  - BookingScene E2E test: 10 steps from start to confirmation, all pass
  - Double-booking scenario: second user rejected at `pre_checkout_query`
  - Expired session scenario: bot gracefully restarts conversation

### TASK-047: Load / Performance Testing
- **Priority**: P1 | **Effort**: L
- **Description**: Use `k6` or `artillery` to simulate load on the webhook endpoint. Simulate: 100 concurrent users sending messages simultaneously to 10 different hotel bots. Measure: p95 response time, error rate, DB connection pool behavior.
- **Acceptance Criteria**:
  - p95 webhook response time < 500ms under 100 concurrent users
  - Zero errors under normal load
  - Identify and document bottlenecks for optimization

---

## PHASE 10 — Marketing Website

### TASK-048: Marketing Site Setup
- **Priority**: P1 | **Effort**: S
- **Description**: Create a separate Next.js project for `hotelbot.io` (the public marketing site). Distinct from the dashboard app. Configure separate deployment. Use a premium font (e.g., Inter from Google Fonts) and a consistent brand design system.
- **Acceptance Criteria**:
  - Separate repo or `apps/marketing` in a monorepo
  - Deploys independently from the dashboard
  - Google Fonts loaded correctly

### TASK-049: Landing Page (Hero + Features + Pricing)
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-048
- **Description**: Build the main landing page (`/`). Sections: Hero (headline, CTA "Start Free Trial"), Features grid (6 key features with icons), How It Works (3-step visual: Create Bot → Connect Dashboard → Go Live), Pricing table (3 tiers from blueprint), Testimonials placeholder, Footer.
- **Acceptance Criteria**:
  - Page loads in under 2 seconds (Lighthouse score > 90)
  - CTA buttons link to `/signup`
  - Fully responsive (mobile, tablet, desktop)
  - SEO: title tag, meta description, OG tags set

### TASK-050: Hotel Owner Signup Page
- **Priority**: P0 | **Effort**: M | **Depends on**: TASK-049
- **Description**: Build `/signup` page. Form fields: Hotel Name, Owner Email, Password, Phone. On submit: call `POST /api/v1/auth/register`. Redirect to onboarding wizard (TASK-051) after success.
- **Acceptance Criteria**:
  - Email uniqueness validated server-side
  - Password strength indicator shown
  - Form shows inline validation errors without page refresh
  - Confirmation email sent after signup (TASK-021 dependency)

### TASK-051: Onboarding Wizard (Post-Signup)
- **Priority**: P0 | **Effort**: L | **Depends on**: TASK-050
- **Description**: 4-step onboarding wizard shown after first login:
  - Step 1: Create bot via BotFather (instructional with screenshots + video link)
  - Step 2: Paste Bot Token (validates against Telegram API live)
  - Step 3: Add first room category (quick form)
  - Step 4: Choose subscription plan → Stripe Checkout
- **Acceptance Criteria**:
  - Progress indicator shows current step
  - Bot token validated live: `GET https://api.telegram.org/bot<TOKEN>/getMe`
  - Can skip Step 4 to start 14-day trial
  - Wizard state persists if user closes browser

### TASK-052: Demo / Live Preview Page
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-049
- **Description**: Create a `/demo` page that lets potential hotel owners interact with a demo Telegram bot (`@HotelBotDemoBot`) pre-loaded with fake room data. Embed a Telegram widget or show a QR code linking to the demo bot.
- **Acceptance Criteria**:
  - Demo bot always has seeded data (reset nightly by a cron job)
  - Demo bot does NOT process real payments (Stripe test mode only)
  - Page includes a "Sign Up Now" CTA after 30 seconds

---

## PHASE 11 — Notification System

### TASK-053: Guest Pre-Arrival Reminder
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: 24 hours before a guest's `check_in_date`, automatically send them a Telegram message: "Your check-in at [Hotel Name] is tomorrow! Room: [X]. Check-in time: [time from settings]. Need help? Reply here." Triggered by a cron job running every hour.
- **Acceptance Criteria**:
  - Only sent if `tenant_guests.opt_in_notifications = true`
  - Not sent if booking is `cancelled`
  - Sent exactly once per booking (idempotent — check `booking_events` table)

### TASK-054: Booking Status Push Notifications
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: Send Telegram message to guest for each booking event:
  - Booking Confirmed: "✅ Your booking [REF] is confirmed!"
  - Booking Cancelled: "❌ Your booking [REF] has been cancelled."
  - Booking Modified: "📝 Your booking [REF] has been updated."
- **Acceptance Criteria**:
  - Notification sent within 30 seconds of event
  - Message is clear and includes booking reference
  - Uses Telegram `sendMessage` with `parse_mode: 'HTML'` for formatting

### TASK-055: Hotel Owner Booking Alert
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-009
- **Description**: When a new booking is confirmed, send an instant notification to the hotel owner's Telegram (if they've linked their Telegram account to the dashboard) and/or email. Include: guest name, room, dates, total paid.
- **Acceptance Criteria**:
  - Notification sent within 1 minute of booking confirmation
  - Can be disabled per tenant in settings
  - Works for both Telegram message and email notification

### TASK-056: Low Availability Alert (Hotel Owner)
- **Priority**: P2 | **Effort**: S | **Depends on**: TASK-053
- **Description**: When a room category's availability drops to 1 remaining for any upcoming 7-day window, notify the hotel owner. This helps them add more rooms or adjust pricing.
- **Acceptance Criteria**:
  - Checked by cron every 6 hours
  - Alert sent only once per availability drop (not every 6 hours repeatedly)
  - Hotel owner can disable this alert in settings

---

## PHASE 12 — Cancellations, Refunds & Policies

### TASK-057: Configurable Cancellation Policy
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: Allow hotel owners to define cancellation policy in dashboard settings:
  - **Full Refund**: Cancel up to X hours before check-in
  - **Partial Refund**: Cancel up to Y hours before (define % refunded)
  - **No Refund**: Non-refundable option
- Store policy in `tenants.settings.cancellation_policy`. Display policy in booking confirmation and summary.
- **Acceptance Criteria**:
  - Policy shown to guest before payment
  - Refund calculation uses policy at time of booking (snapshot stored in `bookings.policy_snapshot`)
  - Policy change doesn't affect already-made bookings

### TASK-058: Stripe Refund Processing
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-057
- **Description**: When a guest cancels (via bot or when hotel staff cancels via dashboard), automatically calculate the refund amount based on the cancellation policy and issue a `stripe.refunds.create()` call. Update `bookings.payment_status` to `refunded` or `partially_refunded`.
- **Acceptance Criteria**:
  - Full refund: 100% returned to guest's card
  - Partial refund: correct % calculated and returned
  - No-refund policy: booking marked cancelled with no refund
  - Guest receives Telegram notification of cancellation + refund amount

### TASK-059: Hotel-Side Booking Modification
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-057
- **Description**: Allow hotel staff to modify a booking from the dashboard (change dates or room). If price changes, handle partial charge or partial refund via Stripe. Create a `booking_events` record for every modification with before/after snapshot.
- **Acceptance Criteria**:
  - Date change checks availability before saving
  - Stripe charge/refund delta is processed automatically
  - Guest notified of modification via Telegram

---

## PHASE 13 — Tax, Coupons & Pricing Rules

### TASK-060: Tax Configuration
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-009
- **Description**: Allow hotel owners to set tax rules in settings: `tax_name` (e.g., "GST"), `tax_percentage` (e.g., 18). Tax is calculated on top of room price and shown as a line item in booking summary and invoice. Tax amount stored in `bookings` table.
- **Acceptance Criteria**:
  - Tax shown as separate line item in bot booking summary
  - PDF receipt itemizes subtotal, tax, and total
  - Tax is charged via Stripe (total = room price + tax)

### TASK-061: Coupon / Promo Code System
- **Priority**: P2 | **Effort**: L
- **Description**: Build coupon system. Dashboard: Create coupon codes with: discount type (% or fixed), discount value, expiry date, max uses, min booking amount. Bot: After guest selects room, ask "Do you have a promo code?" Optional skip button. Validate code, show discounted price.
- **DB Addition**: New `coupons` table: `id`, `tenant_id`, `code`, `discount_type`, `discount_value`, `expires_at`, `max_uses`, `used_count`, `is_active`.
- **Acceptance Criteria**:
  - Invalid/expired codes show clear error message
  - Discount applied in Stripe invoice amount
  - Coupon `used_count` incremented atomically on use

### TASK-062: Dynamic Pricing Rules (Pro Tier)
- **Priority**: P2 | **Effort**: XL
- **Description**: Allow hotel owners to set date-based pricing overrides. Example: "Charge $200/night instead of $150 for Dec 24–Jan 2." Store in `room_price_overrides` table. Bot should use the override price for the selected date range.
- **DB Addition**: `room_price_overrides`: `id`, `category_id`, `tenant_id`, `start_date`, `end_date`, `price_per_night`.
- **Acceptance Criteria**:
  - Overrides take priority over base category price
  - Dashboard shows a visual calendar with price overrides highlighted
  - Gate behind Pro/Enterprise feature flag

---

## PHASE 14 — Audit Logs & Compliance

### TASK-063: Audit Log System
- **Priority**: P1 | **Effort**: M
- **Description**: Create a generic `audit_logs` table: `id`, `tenant_id`, `actor_type` (guest/staff/system), `actor_id`, `action` (e.g., `booking.created`, `room.updated`, `staff.invited`), `resource_type`, `resource_id`, `diff` (JSONB: before/after), `ip_address`, `created_at`. Log every write operation from the API.
- **Acceptance Criteria**:
  - Every POST/PATCH/DELETE API call creates an audit log entry
  - Super-admin can view audit logs across all tenants
  - Audit logs are write-only (cannot be deleted or modified)

### TASK-064: Terms of Service & Privacy Policy Pages
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-048
- **Description**: Create static `/terms` and `/privacy` pages on the marketing site. Include a Data Processing Agreement (DPA) that hotel owners accept during signup (checkbox + timestamp stored in `tenants.dpa_accepted_at`).
- **Acceptance Criteria**:
  - Pages are reachable from footer and signup form
  - DPA acceptance timestamp stored in DB
  - `/start` bot command shows a one-line privacy notice with link

### TASK-065: PCI DSS Compliance Notes
- **Priority**: P0 | **Effort**: S
- **Description**: Document and verify PCI compliance. Since all card data goes through Stripe, we are PCI SAQ-A compliant. Ensure no card data ever touches our servers. Verify: no raw card numbers in logs, no card data stored in DB.
- **Acceptance Criteria**:
  - Internal compliance document written
  - Log scrubber middleware added: mask any accidental card-like numbers in logs
  - Stripe.js used on frontend (no raw card input on our pages)

---

## PHASE 15 — API Documentation

### TASK-066: OpenAPI / Swagger Docs
- **Priority**: P1 | **Effort**: M
- **Description**: Install `swagger-ui-express` and `swagger-jsdoc`. Annotate all REST API routes with JSDoc OpenAPI comments. Expose the Swagger UI at `/api/docs` (protected by basic auth in production).
- **Acceptance Criteria**:
  - All 20+ endpoints documented with request/response schemas
  - Swagger UI accessible and functional
  - Docs auto-updated when routes change (no manual sync)

### TASK-067: Hotel Owner Setup Guide (Docs Site)
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-048
- **Description**: Create a documentation site (`docs.hotelbot.io`) using Docusaurus or Mintlify. Write guides: "How to Create Your Bot", "Adding Rooms", "Understanding Bookings", "Setting Up Payments", "Cancellation Policies", "Staff Access".
- **Acceptance Criteria**:
  - At least 6 guide pages published
  - Screenshots included in each guide
  - Searchable

### TASK-068: Postman Collection
- **Priority**: P2 | **Effort**: S | **Depends on**: TASK-066
- **Description**: Export a Postman collection from the Swagger spec. Include environment variables for `BASE_URL`, `JWT_TOKEN`. Publish to Postman public workspace or share as a JSON file in the repo.
- **Acceptance Criteria**:
  - All endpoints in the collection
  - Auth setup instructions included in the collection README
  - Collection importable with one click

---

## PHASE 16 — Advanced Bot Features

### TASK-069: Bot Command Registration
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-016
- **Description**: When a new tenant is provisioned (webhook set), also call `setMyCommands` on the Telegram API to register: `/start`, `/book`, `/mybookings`, `/cancel`, `/help`, `/language`, `/deletemydata`. This makes the bot show a command menu to users.
- **Acceptance Criteria**:
  - Typing `/` in the bot shows the command list
  - Commands auto-registered when webhook is set
  - Commands auto-cleared when webhook is removed (on suspension)

### TASK-070: Mid-Flow Interruption Handling
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-008
- **Description**: Handle cases where a user sends `/start` or a random message in the middle of a booking flow. Options: (a) warn "You have an active booking in progress. Continue?" with Resume/Restart buttons, or (b) gracefully reset the scene.
- **Acceptance Criteria**:
  - No unhandled errors when `/start` sent mid-scene
  - Guest can choose to resume or abandon
  - Abandoned booking session cleaned from Redis and any `pending` DB records

### TASK-071: Repeat Guest Recognition
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-009
- **Description**: When a returning guest starts a new booking, the bot should greet them by name and pre-fill their contact info. "Welcome back, Sarah! Shall I use your saved phone number ending in 4567?"
- **Acceptance Criteria**:
  - Only triggered if guest has a previous completed booking at this hotel
  - Guest can reject and re-enter phone number
  - Pre-fill only applies to phone number, not dates (always fresh)

### TASK-072: Room Availability Calendar (Dashboard)
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-025
- **Description**: Add a visual calendar view in the hotel dashboard (`/dashboard/availability`). For each room category, show a color-coded heatmap calendar: green = available, orange = few rooms left, red = fully booked.
- **Acceptance Criteria**:
  - Calendar shows 3 months at a time
  - Color coding is accurate based on real booking data
  - Clicking a date shows the bookings for that day in a side panel

---

## PHASE 17 — PMS & External Integrations

### TASK-073: Outbound Webhook System (For Hotel PMS)
- **Priority**: P2 | **Effort**: L
- **Description**: Many hotels use Property Management Systems (PMS) like Opera, Mews, or Cloudbeds. Allow hotel owners to configure an outbound webhook URL in settings. When a booking is confirmed/cancelled, POST the booking payload to their PMS webhook URL. Include HMAC signature for security.
- **DB Addition**: `tenant_webhooks`: `id`, `tenant_id`, `url`, `secret`, `events` (JSONB array), `is_active`.
- **Acceptance Criteria**:
  - Retry logic: 3 retries with exponential backoff on failure
  - Dashboard shows webhook delivery logs (success/failure)
  - HMAC signature header sent for verification by the PMS

### TASK-074: iCal / Calendar Export
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-025
- **Description**: Generate an iCal feed URL per tenant (`/api/v1/tenant/bookings/calendar.ics?token=XXX`). This feed contains all confirmed bookings as calendar events. Hotel owners can subscribe to this in Google Calendar or Apple Calendar.
- **Acceptance Criteria**:
  - iCal URL returns valid `.ics` format
  - Each booking is one calendar event (title: "Guest: [Name] - Room [X]")
  - Feed updates in real-time

### TASK-075: CSV/Excel Booking Export
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-025
- **Description**: Add a "Export Bookings" button in the dashboard Bookings page. Backend generates a CSV with all bookings for the selected date range. Columns: Reference, Guest Name, Guest Phone, Room, Check-in, Check-out, Nights, Total, Status, Booked At.
- **Acceptance Criteria**:
  - CSV downloads immediately (streamed response)
  - Date range filter applied to export
  - Column headers in first row

---

## PHASE 18 — Operational Runbooks

### TASK-076: Local Development Setup Guide
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-036
- **Description**: Write `CONTRIBUTING.md` and `LOCAL_SETUP.md` docs in the repo. Steps: prerequisites, clone, `docker-compose up`, env file setup, run migrations, seed data, start dev server. Include troubleshooting section.
- **Acceptance Criteria**:
  - A new developer can get the app running locally in under 30 minutes
  - Includes commands for common tasks (run tests, add migration, seed DB)

### TASK-077: Production Deploy Runbook
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-037
- **Description**: Write `DEPLOY.md`. Documents: how CI/CD works, how to manually trigger a deploy, how to roll back a broken release, how to run DB migrations in production, environment variable management in production.
- **Acceptance Criteria**:
  - Rollback procedure is documented and tested
  - Migration steps are separate from app deploy (zero-downtime migrations)

### TASK-078: Incident Response Runbook
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-038
- **Description**: Write `INCIDENT_RUNBOOK.md`. Defines: severity levels (P0/P1/P2), on-call responsibilities, escalation path, how to check logs (Axiom/Datadog commands), common failure modes and their fixes (DB connections exhausted, Redis down, Telegram API outage).
- **Acceptance Criteria**:
  - At least 5 common failure scenarios documented with resolution steps
  - On-call contact list defined
  - Incident post-mortem template included

### TASK-079: Database Backup & Restore Test
- **Priority**: P0 | **Effort**: M
- **Description**: Configure automated daily PostgreSQL backups in production (via managed DB provider or `pg_dump` cron). Document and practice the restore procedure. Run a quarterly restore drill. Store backup retention for 30 days.
- **Acceptance Criteria**:
  - Automated backup runs daily and is verified (backup size > 0)
  - Restore procedure is documented and takes < 1 hour
  - Restore successfully tested in staging environment

### TASK-080: Feature Flag System
- **Priority**: P1 | **Effort**: M
- **Description**: Implement a lightweight feature flag system. Store flags in `tenants.feature_flags` JSONB (already in schema). Create a `FeatureFlag` service that checks if a flag is enabled for a given tenant. Flags: `ai_nlp`, `broadcast_messaging`, `dynamic_pricing`, `iCal_export`. Dashboard shows which features are enabled (per subscription tier).
- **Acceptance Criteria**:
  - Disabling a flag immediately prevents access (no redeploy needed)
  - Super-admin can toggle flags per tenant from admin panel
  - Bot and API both check flags before executing gated features

---

## Summary — Part 2

| Phase | Tasks | Coverage Area |
|---|---|---|
| 9 — Testing | 043–047 | Unit, Integration, E2E, Load testing |
| 10 — Marketing Site | 048–052 | Landing page, Signup, Onboarding, Demo |
| 11 — Notifications | 053–056 | Pre-arrival, status updates, owner alerts |
| 12 — Cancellations | 057–059 | Policies, Stripe refunds, modifications |
| 13 — Tax & Coupons | 060–062 | Tax, promo codes, dynamic pricing |
| 14 — Audit & Compliance | 063–065 | Audit logs, ToS, PCI DSS |
| 15 — Documentation | 066–068 | Swagger, Docs site, Postman |
| 16 — Advanced Bot | 069–072 | Commands, interruptions, repeat guests, calendar |
| 17 — Integrations | 073–075 | PMS webhooks, iCal, CSV export |
| 18 — Ops Runbooks | 076–080 | Dev setup, deploy, incidents, backups, feature flags |

**Part 2 Tasks**: 38 (TASK-043 to TASK-080)
**Grand Total (Part 1 + Part 2)**: **80 Tasks**
