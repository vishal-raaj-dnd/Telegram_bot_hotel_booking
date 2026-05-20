# ✅ HotelBot SaaS — Final Gaps Task List (Part 4)

> Last supplementary task list. Tasks 116–130. These are the remaining real-world operational, infrastructure, and UX gaps not covered in Parts 1–3. After this, the project is comprehensively planned.

---

## PHASE 33 — Infrastructure & Architecture

### TASK-116: Monorepo Setup (Turborepo)
- **Priority**: P1 | **Effort**: M
- **Description**: The project has at least 3 deployable apps: `backend` (API + bot), `dashboard` (Next.js), `marketing` (Next.js). Set up a Turborepo monorepo so they share: TypeScript types, ESLint config, Prisma client, and utility packages. Single root `package.json`, shared `tsconfig`, and a unified CI pipeline.
- **Acceptance Criteria**:
  - `turbo run build` builds all apps from the root
  - Shared `packages/types` package contains Prisma-generated types consumed by all apps
  - Each app still deploys independently

### TASK-117: Per-Tenant API Rate Limiting
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-033
- **Description**: Implement rate limiting at the tenant level (not just IP level) for the REST API. Use Redis to track request count per `tenant_id` per 15-minute window. Default limits: Starter = 100 req/min, Pro = 500 req/min, Enterprise = unlimited. Return `429 Too Many Requests` with `Retry-After` header on breach.
- **Acceptance Criteria**:
  - Limits enforced server-side even if multiple API instances are running (Redis-backed counter)
  - Limit per tier configurable in feature flags without code deploy
  - Exceeded tenants see clear error, super-admin is alerted if a tenant consistently hits limits

---

## PHASE 34 — Hotel Operations Tools

### TASK-118: Bulk Room Import via CSV
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-024
- **Description**: Add a "Bulk Import Rooms" button in the dashboard. Hotel downloads a CSV template, fills in room data, and uploads. Backend validates each row and creates room categories + individual rooms in a single transaction. Returns a summary report of successes and failures.
- **CSV Template Columns**: `name`, `description`, `price_per_night`, `currency`, `max_guests`, `amenities` (semicolon-separated), `inventory_count`
- **Acceptance Criteria**:
  - Invalid rows (missing required fields) are rejected with row number and reason
  - Valid rows are imported atomically
  - Maximum 200 rooms per import file

### TASK-119: Seasonal Blackout Dates
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-008
- **Description**: Allow hotel owners to block out specific date ranges during which no bookings are accepted (e.g., hotel is closed for renovation). Store in a `blackout_periods` table: `id`, `tenant_id`, `start_date`, `end_date`, `reason`. Bot availability check must exclude blackout periods.
- **Acceptance Criteria**:
  - Bot shows "Hotel is unavailable during [dates]" if selected dates overlap a blackout
  - Dashboard has a calendar UI to add/remove blackout ranges
  - Existing bookings within a newly added blackout period trigger a staff warning (not auto-cancelled)

### TASK-120: Hotel Sandbox / Test Mode
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-015
- **Description**: Allow hotel owners to put their bot into "Test Mode" from the dashboard. In test mode: Stripe uses test keys (no real charges), bookings are tagged `is_test: true`, and a "🧪 TEST MODE" banner is appended to all bot messages. Useful for hotels testing their setup before going live.
- **Acceptance Criteria**:
  - Test mode toggle in dashboard settings
  - Test bookings excluded from all analytics and financial reports
  - Switching to live mode requires active subscription

---

## PHASE 35 — Account & Tenant Management

### TASK-121: Tenant Self-Service Pause & Deactivation
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-030
- **Description**: Allow hotel owners to self-serve: (a) **Pause** — temporarily suspend their bot (e.g., off season) without cancelling subscription, or (b) **Cancel** — fully cancel subscription. Pause: bot sends "We are temporarily closed" message to guests. Cancel: triggers Stripe cancellation and webhook unregistration.
- **Acceptance Criteria**:
  - Paused bots respond to messages with a configurable "We're closed" message
  - Paused tenants are not charged (subscription paused via Stripe Pause feature)
  - Cancellation requires a confirmation step + captures cancellation reason for churn analysis

### TASK-122: Account Ownership Transfer
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-028
- **Description**: Allow the current `owner` of a tenant account to transfer ownership to another staff member. Process: current owner selects new owner from staff list → sends email confirmation to new owner → new owner accepts via link → roles swapped atomically.
- **Acceptance Criteria**:
  - Transfer requires acceptance from the new owner (cannot be forced)
  - Old owner demoted to `manager` role
  - Stripe billing contact updated to new owner's email
  - Transfer logged in audit_logs table

### TASK-123: GDPR Data Portability (Article 20 — Hotel Owner Data Export)
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-064
- **Description**: Allow hotel owners to export ALL their data from the platform as a ZIP file: tenant settings, all room categories, all bookings (CSV), all guest contact info they collected, all financial transactions, all staff accounts. This is a legal requirement under GDPR Article 20.
- **Acceptance Criteria**:
  - Export generated asynchronously (hotel owner emailed a download link when ready)
  - ZIP contains structured JSON/CSV files for each data type
  - Download link expires after 48 hours
  - Export request logged in audit_logs

---

## PHASE 36 — Revenue & Commission

### TASK-124: Platform Commission Tracking (Per-Booking Fee)
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-018
- **Description**: Implement the optional per-booking commission model (1–3% of booking value, as defined in the business model). Use **Stripe Connect** with the "application fee" mechanism: when a guest pays, Stripe automatically splits the payment — hotel receives (100% - commission%), we receive commission%. Track all commissions in a `platform_commissions` table.
- **DB Addition**: `platform_commissions`: `id`, `booking_id`, `tenant_id`, `gross_amount`, `commission_pct`, `commission_amount`, `stripe_transfer_id`, `created_at`.
- **Acceptance Criteria**:
  - Commission collected automatically by Stripe (no manual reconciliation)
  - Super-admin dashboard shows total commission revenue per month
  - Hotel dashboard shows gross booking amount (commission is platform-side only)

---

## PHASE 37 — Support & Escalation

### TASK-125: Live Agent Handoff (Bot → Human)
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-012
- **Description**: When a guest asks a question the bot cannot answer (e.g., types free-form text outside of a scene), add a "Talk to Staff" button. When clicked, the guest's Telegram ID is flagged in the dashboard as "needs attention." Hotel staff are notified (TASK-055). Staff can respond via the dashboard chat (TASK-097). Bot shows "A team member will be with you shortly."
- **Acceptance Criteria**:
  - "Needs attention" guests appear in a dedicated "Inbox" section in the dashboard
  - Staff can resolve the conversation (removes from Inbox)
  - After 1 hour without response, guest is re-notified with hotel phone/email as fallback

### TASK-126: Intercom / Crisp Integration (For Hotel Owners Contacting Us)
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-022
- **Description**: Embed Intercom or Crisp live chat widget in the hotel dashboard for hotel owners to contact our support team. Identify users by their `tenant_id`, `name`, and `email` so our support agents see full context. Gate: only available on Pro/Enterprise plans.
- **Acceptance Criteria**:
  - Widget appears in bottom-right corner of the dashboard
  - User is pre-identified (no need to enter name/email in chat)
  - Widget hidden for Starter tier with a "Upgrade to Pro for live support" tooltip

---

## PHASE 38 — Monitoring & Observability (Advanced)

### TASK-127: Bot Webhook Health Dashboard (Super Admin)
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-016
- **Description**: Build a "Bot Health" panel in the super-admin dashboard. For each tenant, show: webhook registration status (active/inactive), last webhook received timestamp, failed update count in last 24 hours (Telegram retries failed updates up to ~48 hours). Alert if a tenant's bot has had 0 updates in 24 hours and is marked as active.
- **Acceptance Criteria**:
  - Panel refreshes every 5 minutes
  - Red alert badge on tenants with no recent webhook activity
  - One-click "Re-register Webhook" action from the admin panel

### TASK-128: Stripe & Telegram Webhook Replay Dashboard
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-019
- **Description**: Log every received Stripe webhook event (`id`, `type`, `payload`, `status`, `processed_at`, `error`) in a `webhook_logs` table. Super-admin can view this log and manually replay a failed webhook event (re-POST the payload to our handler). Prevents data loss from transient processing failures.
- **DB Addition**: `webhook_logs`: `id`, `source` (stripe/telegram), `event_id`, `event_type`, `payload` (JSONB), `status` (processed/failed/replayed), `error_message`, `created_at`.
- **Acceptance Criteria**:
  - All Stripe webhook events logged before processing
  - Failed events clearly visible with error message
  - Manual replay triggers the handler with the stored payload
  - Idempotency guaranteed on replay (no duplicate DB writes)

---

## PHASE 39 — Enterprise & SLA

### TASK-129: Enterprise SLA Document
- **Priority**: P1 | **Effort**: S
- **Description**: Write a formal Service Level Agreement (SLA) for Enterprise tier customers. Define: **Uptime** (99.9% monthly), **Response Time** (P0 incident < 1 hour, P1 < 4 hours), **Maintenance Windows** (Sundays 02:00–04:00 UTC), **Data Retention** (5 years), and **Support** (dedicated Slack channel). Store SLA version in `tenants.sla_version` for tracking.
- **Acceptance Criteria**:
  - SLA document in `/legal/sla.pdf` on the marketing site
  - Enterprise tenant dashboard shows their SLA version
  - Breach tracking: if uptime drops below 99.9% in a month, credit calculation documented

---

## PHASE 40 — Internationalization

### TASK-130: Dashboard i18n (Multi-Language)
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-022
- **Description**: Internationalize the hotel owner dashboard using `next-i18next` or `react-i18next`. Support: English (default), Arabic (RTL layout), French, Spanish. Extract all UI strings to locale JSON files. Add language selector in dashboard settings. RTL layout for Arabic (use CSS `dir="rtl"`).
- **Acceptance Criteria**:
  - All visible UI strings translated in all 4 languages
  - Arabic layout is fully RTL (no broken elements)
  - Language preference saved per `tenant_user` account (not browser-wide)
  - Adding a 5th language requires only adding a new locale file

---

## ✅ Truly Final Summary — All 4 Parts

| Document | Phases | Tasks | Focus Area |
|---|---|---|---|
| [Part 1](TASK_LIST.md) | 0–8 | 001–042 | Core product: bot, tenancy, payments, dashboard, billing |
| [Part 2](TASK_LIST_PART2.md) | 9–18 | 043–080 | Testing, marketing, notifications, refunds, tax, docs, ops |
| [Part 3](TASK_LIST_PART3.md) | 19–32 | 081–115 | Web portal, analytics, group bookings, CDN, security, launch |
| [Part 4](TASK_LIST_PART4.md) | 33–40 | 116–130 | Monorepo, rate limits, bulk import, blackouts, sandbox, GDPR, commission, SLA, i18n |

### 🔢 Grand Total: **130 Tasks** across **40 Phases**

This is a complete, real-world production plan. No significant tasks remain.
