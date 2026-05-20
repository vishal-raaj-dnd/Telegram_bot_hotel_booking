# ✅ HotelBot SaaS — Final Task List (Part 3)

> Continuation of Part 1 & Part 2. Tasks 081–115. Covers: Guest Web Portal, Bot Analytics, Waitlist, Group Bookings, Digital Check-in, Loyalty, Deposits, Multi-Property, Support Tools, Status Page, Accessibility, CDN, DB Performance, Security Hardening, Marketing Automation, and Accounting.

---

## PHASE 19 — Guest Web Booking Portal

### TASK-081: Public Booking Web Page Per Tenant
- **Priority**: P1 | **Effort**: L
- **Description**: Each hotel gets a public web booking page at `hotelbot.io/book/<slug>` (or their custom domain). Guests who don't use Telegram can book directly from this page. Shows rooms, date picker, and Stripe payment form. Shares the same booking logic and DB as the Telegram bot.
- **Acceptance Criteria**:
  - Page fetches tenant's active room categories
  - Stripe Elements embedded for card payment
  - Booking confirmation page shown after payment
  - Booking created in same `bookings` table as bot bookings

### TASK-082: QR Code Generator Per Hotel
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-081
- **Description**: In the dashboard, auto-generate two QR codes per hotel: (1) Telegram bot link (`t.me/<bot_username>`), (2) Web booking page link (`hotelbot.io/book/<slug>`). Hotel owner can download and print for reception desk.
- **Acceptance Criteria**:
  - QR codes downloadable as PNG and SVG
  - Custom hotel name printed below QR code
  - QR codes update automatically if bot username changes

### TASK-083: White-Label Custom Domain (Enterprise)
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-081
- **Description**: Enterprise tenants can map a custom domain (e.g., `book.grandhotel.com`) to their web booking page. Backend: verify domain ownership via CNAME record, provision TLS certificate via Let's Encrypt/Cloudflare. Store `custom_domain` in `tenants` table.
- **Acceptance Criteria**:
  - Dashboard shows CNAME instructions for the hotel owner
  - Domain verification checked before activating
  - TLS auto-provisioned within 24 hours of CNAME propagation
  - Feature gated to Enterprise tier only

---

## PHASE 20 — Bot Analytics & Conversion Tracking

### TASK-084: Bot Usage Event Logging
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-005
- **Description**: Log key bot interaction events to a `bot_events` table: `tenant_id`, `telegram_id`, `event_type` (`scene_entered`, `scene_exited`, `command_used`, `booking_started`, `booking_completed`, `booking_abandoned`), `metadata` (JSONB), `created_at`.
- **Acceptance Criteria**:
  - Events logged without impacting bot response speed (async, non-blocking)
  - `booking_abandoned` logged when user exits BookingScene without completing payment
  - No PII logged in event metadata

### TASK-085: Booking Funnel Analytics Dashboard
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-084
- **Description**: Add an "Analytics" page in the hotel dashboard. Show funnel visualization: Started → Chose Dates → Selected Room → Proceeded to Payment → Completed. Calculate drop-off % at each step. Also show: daily/weekly active users, most viewed room categories.
- **Acceptance Criteria**:
  - Funnel updates in near real-time (5-minute delay max)
  - Hotel can filter by date range
  - Drop-off % highlighted in red if > 50%

### TASK-086: Platform-Level Analytics (Super Admin)
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-084
- **Description**: Add platform analytics to the super-admin dashboard: Total bookings per day across all tenants, MRR growth chart, most active tenants, overall bot interaction volume, Stripe revenue trends.
- **Acceptance Criteria**:
  - All charts have date range filters
  - CSV export for finance team
  - Data aggregated to avoid exposing individual tenant guest data

---

## PHASE 21 — Waitlist & Advanced Availability

### TASK-087: Room Waitlist System
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-008
- **Description**: When a room category is fully booked for requested dates, offer: "This room is sold out. Want to join the waitlist? We'll notify you if a spot opens." Store waitlist entries. When a booking is cancelled (TASK-058), check waitlist and notify the next guest via Telegram.
- **DB Addition**: `waitlist` table: `id`, `tenant_id`, `category_id`, `guest_telegram_id`, `check_in`, `check_out`, `notified_at`, `status`.
- **Acceptance Criteria**:
  - Waitlist is FIFO (first in, first notified)
  - Guest gets a Telegram message when room becomes available
  - Guest can remove themselves from waitlist via bot command

### TASK-088: Minimum Stay Rules
- **Priority**: P2 | **Effort**: S | **Depends on**: TASK-008
- **Description**: Allow hotel to set minimum stay nights per room category (e.g., "Minimum 2 nights for the Suite"). Validated in BookingScene step 2 (check-out date selection). Store `min_stay_nights` in `room_categories` table.
- **Acceptance Criteria**:
  - Bot shows error if guest selects fewer nights than minimum
  - Dashboard lets hotel set min stay per category
  - Minimum stay shown on the room card in the bot

---

## PHASE 22 — Group & Event Bookings

### TASK-089: Multi-Room Group Booking
- **Priority**: P2 | **Effort**: XL | **Depends on**: TASK-009
- **Description**: Allow a guest to book multiple rooms of the same or different categories in one transaction. Bot flow: After selecting first room, ask "Add another room?" (Yes/No). Each room added to the cart. One consolidated Stripe invoice for all rooms.
- **Acceptance Criteria**:
  - Each room in the group booking has its own `bookings` row but linked by a `group_booking_id`
  - Atomic availability check for all rooms before payment
  - Confirmation message lists all rooms and a combined total

### TASK-090: Corporate / Long-Stay Rates (Pro Tier)
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-062
- **Description**: Allow hotels to configure a discount for stays above a certain duration (e.g., "10% off for stays of 7+ nights"). Applied automatically in the booking summary if the condition is met. Store as `long_stay_rules` in `tenants.settings`.
- **Acceptance Criteria**:
  - Discount shown as a line item in the booking summary
  - Discount reflected in Stripe invoice amount
  - Guest notified: "Long stay discount of 10% applied!"

---

## PHASE 23 — Digital Check-in & Room Management

### TASK-091: Digital Pre-Check-in Form
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-053
- **Description**: 48 hours before check-in, bot sends a pre-check-in message asking guests to confirm/update: full name, nationality, estimated arrival time, and any special requests. Responses saved to the booking record. Hotel can view pre-check-in info in dashboard.
- **Acceptance Criteria**:
  - Form answers saved to `bookings.guest_precheck_data` (JSONB)
  - Hotel dashboard shows pre-check-in status per booking (Pending / Completed)
  - Guest can skip the form

### TASK-092: Room Maintenance Status
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-024
- **Description**: Add a "Maintenance" toggle per individual room (`rooms` table). When enabled, that specific room cannot be assigned to new bookings. Dashboard shows a maintenance flag on room cards. Hotel staff can add a note (e.g., "Broken AC, repairs until June 5").
- **Acceptance Criteria**:
  - Maintenance rooms excluded from availability calculations
  - Existing confirmed bookings in that room show a warning to hotel staff
  - Maintenance flag auto-expires on a set date (optional)

---

## PHASE 24 — Loyalty & Deposits

### TASK-093: Repeat Guest Discount (Loyalty)
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-071
- **Description**: If a guest has N+ completed bookings at a hotel, automatically apply a loyalty discount (configured by hotel, e.g., "5% off from 3rd booking onwards"). Applied at checkout. Store `loyalty_discount_pct` and `loyalty_threshold_bookings` in `tenants.settings`.
- **Acceptance Criteria**:
  - Discount shown clearly in booking summary
  - Threshold count based on `confirmed` bookings at that specific hotel
  - Hotel can disable loyalty discounts in settings

### TASK-094: Deposit / Partial Payment
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-009
- **Description**: Allow hotels to configure a deposit policy (e.g., "Pay 30% now, rest at check-in"). Bot charges the deposit via Telegram Invoice. Remaining balance is stored as `bookings.balance_due`. Dashboard flags bookings with pending balance. Reminder sent 48 hours before check-in.
- **Acceptance Criteria**:
  - Deposit percentage configurable per room category
  - `balance_due` visible in dashboard and bot `/mybookings`
  - Stripe partial charge correctly processed

---

## PHASE 25 — Multi-Property Support (Enterprise)

### TASK-095: Properties Under One Tenant Account
- **Priority**: P2 | **Effort**: XL | **Depends on**: TASK-015
- **Description**: Enterprise hotel chains can manage multiple properties (e.g., "Grand Hotel Downtown" and "Grand Hotel Airport") under one dashboard account. Each property has its own bot token, room inventory, and bookings. Dashboard adds a property selector dropdown.
- **DB Addition**: New `properties` table: `id`, `tenant_id`, `name`, `address`, `bot_token`, `settings`. All `rooms` and `bookings` gain a `property_id` FK.
- **Acceptance Criteria**:
  - Switching properties in dashboard shows only that property's data
  - Each property has its own bot with its own webhook
  - Aggregate view available at the tenant level (across all properties)

---

## PHASE 26 — Support & Operations Tools

### TASK-096: Bot Conversation History Viewer
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-084
- **Description**: In the hotel dashboard, add a "Conversations" page. Lists all guests who have interacted with the bot. Clicking a guest shows their message history. Messages stored in `bot_messages` table. Useful for the hotel's support team to review issues.
- **DB Addition**: `bot_messages`: `id`, `tenant_id`, `telegram_id`, `direction` (in/out), `message_type`, `content`, `created_at`.
- **Acceptance Criteria**:
  - Messages searchable by guest name or phone
  - PII handling: hotel staff can only see messages for their own tenancy
  - Super-admin cannot view individual message content (privacy protection)

### TASK-097: Hotel-to-Guest Direct Message (Dashboard)
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-096
- **Description**: Allow hotel staff to send a custom message to a specific guest directly from the dashboard conversation view. Useful for handling special requests or issues outside the bot flow.
- **Acceptance Criteria**:
  - Message sent via Telegram bot (using `sendMessage` API)
  - Message logged in `bot_messages` with `direction: 'out'`
  - Rate limit: max 10 manual messages per guest per day

### TASK-098: Platform Status Page
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-038
- **Description**: Create a public status page at `status.hotelbot.io` (using Statuspage.io or a simple static page updated by GitHub Actions). Shows: API uptime, Bot Webhook uptime, Database uptime, Stripe connectivity. Historical incident timeline.
- **Acceptance Criteria**:
  - Status page auto-updates based on UptimeRobot checks
  - Past incidents listed with root cause
  - Hotel owners can subscribe for email alerts

---

## PHASE 27 — Accessibility & Frontend Quality

### TASK-099: Dashboard Accessibility (WCAG 2.1 AA)
- **Priority**: P1 | **Effort**: L | **Depends on**: TASK-022
- **Description**: Audit and fix dashboard for WCAG 2.1 AA compliance: all images have alt text, all form fields have labels, keyboard navigation works throughout, color contrast ratio ≥ 4.5:1, modals return focus on close.
- **Acceptance Criteria**:
  - Lighthouse Accessibility score ≥ 90
  - All interactive elements reachable and operable via keyboard only
  - Screen reader (NVDA/VoiceOver) can navigate the main flows

### TASK-100: Dashboard Dark Mode
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-022
- **Description**: Add dark mode toggle to the dashboard. Respect `prefers-color-scheme` OS setting by default. Store user preference in `localStorage`. Implement via CSS custom properties (variables) with a `[data-theme="dark"]` class on `<html>`.
- **Acceptance Criteria**:
  - Toggle switch visible in the top navigation bar
  - Preference persists across sessions
  - All pages readable in both modes (no invisible text or broken contrast)

---

## PHASE 28 — CDN & Performance

### TASK-101: AWS S3 + CloudFront CDN Setup
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-020
- **Description**: Configure a CloudFront distribution in front of the S3 bucket storing room images and PDF receipts. Set cache headers (`max-age=31536000` for images). Configure S3 bucket policy to deny direct access (CloudFront only). Update image URLs in DB to use CloudFront domain.
- **Acceptance Criteria**:
  - Images served via CloudFront URL (not S3 URL directly)
  - TTFB (Time to First Byte) for images < 200ms globally
  - S3 bucket blocks all public direct access

### TASK-102: Image Optimization Pipeline
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-101
- **Description**: When a hotel owner uploads a room image, process it server-side before storing to S3: resize to max 1200x900px, convert to WebP format, generate a thumbnail (300x225px). Use `sharp` npm package. Store both full and thumbnail URLs in `room_categories.images`.
- **Acceptance Criteria**:
  - Images < 200KB after optimization
  - WebP format used (fallback JPEG for unsupported clients)
  - Bot sends thumbnail; dashboard loads full image on demand

### TASK-103: Database Query Optimization
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-002
- **Description**: Profile all slow queries using PostgreSQL `EXPLAIN ANALYZE`. Add missing composite indexes. Specifically: availability check query (most frequent), booking list query (most data-heavy), and tenant lookup by token (highest frequency). Implement connection pooling via PgBouncer.
- **Acceptance Criteria**:
  - Availability check query executes in < 50ms under load
  - No sequential full table scans on large tables
  - Connection pool size tuned to server resources

---

## PHASE 29 — Security Hardening (Advanced)

### TASK-104: Security Penetration Testing
- **Priority**: P1 | **Effort**: L
- **Description**: Perform a structured penetration test before public launch. Scope: REST API endpoints, authentication flows, Telegram webhook endpoint, dashboard XSS/CSRF, SQL injection attempts. Use OWASP ZAP for automated scanning. Document and remediate all findings rated Medium or above.
- **Acceptance Criteria**:
  - Zero High/Critical OWASP findings outstanding at launch
  - Pen test report documented in internal security wiki
  - Re-test after fixing all Medium+ findings

### TASK-105: API Key & Secret Rotation Procedure
- **Priority**: P1 | **Effort**: S
- **Description**: Document and implement a secrets rotation procedure for: `JWT_SECRET`, `ENCRYPTION_KEY`, `STRIPE_SECRET_KEY`, `SENDGRID_API_KEY`. Use AWS Secrets Manager or Doppler for storage. Rotation should cause zero downtime (support old + new key simultaneously during rotation window).
- **Acceptance Criteria**:
  - Rotation procedure documented step-by-step
  - JWT supports dual-key validation during rotation (old key valid for 24h after rotation)
  - Rotation tested in staging environment

### TASK-106: Bot Token Compromise Response Plan
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-016
- **Description**: Document what happens if a hotel's bot token is compromised. Procedure: (1) Hotel reports via dashboard, (2) We immediately call `deleteWebhook` on the old token, (3) Hotel creates a new bot token via BotFather, (4) They update in dashboard, (5) We re-register webhook. Automate steps 2 and 5.
- **Acceptance Criteria**:
  - "Report Compromised Token" button in dashboard settings
  - Old webhook deleted immediately on button press
  - Hotel guided through the token replacement flow

---

## PHASE 30 — Marketing Automation & Growth

### TASK-107: Tenant Onboarding Email Drip Campaign
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-050
- **Description**: After a hotel signs up, trigger an automated email sequence via SendGrid or Mailchimp:
  - Day 0: Welcome + Setup Guide link
  - Day 1: "Add your first room" reminder (if no rooms added)
  - Day 3: "Test your bot" tutorial
  - Day 7: Trial ending soon (if still on trial)
  - Day 14: Trial expired → upgrade prompt
- **Acceptance Criteria**:
  - Emails stop once the hotel completes each milestone
  - Unsubscribe link works and sets `email_opt_out = true` on tenant
  - Open rates tracked via SendGrid analytics

### TASK-108: Referral / Affiliate Program
- **Priority**: P2 | **Effort**: L | **Depends on**: TASK-029
- **Description**: Allow existing hotel owners to refer new hotels. Generate a unique referral code per tenant. Referred hotel gets 1 month free. Referring hotel gets a credit. Track referrals in a `referrals` table. Dashboard shows referral history and earned credits.
- **DB Addition**: `referrals`: `id`, `referrer_tenant_id`, `referred_tenant_id`, `referral_code`, `status`, `reward_applied_at`.
- **Acceptance Criteria**:
  - Referral code auto-generated on tenant creation
  - Credit applied to Stripe invoice via Stripe balance mechanism
  - Referral dashboard shows: referrals sent, referrals converted, credits earned

---

## PHASE 31 — Accounting & Finance

### TASK-109: Monthly Financial Report Generation
- **Priority**: P1 | **Effort**: M | **Depends on**: TASK-026
- **Description**: On the 1st of every month, auto-generate a financial report PDF for each hotel: total bookings, total revenue, refunds issued, net revenue, tax collected. Email to hotel owner and make it available in dashboard under "Reports".
- **Acceptance Criteria**:
  - Report generated by cron at 00:01 on the 1st of each month
  - PDF includes hotel logo and month/year
  - Available in dashboard under "Reports" tab with download link

### TASK-110: Accounting Export (QuickBooks/Xero Format)
- **Priority**: P2 | **Effort**: M | **Depends on**: TASK-075
- **Description**: Allow hotel owners to export bookings in a format compatible with QuickBooks and Xero (CSV with specific column mappings for their import tools). Include: date, description, amount, tax, account code. Exportable from the Reports page.
- **Acceptance Criteria**:
  - QuickBooks-format CSV importable without errors
  - Xero-format CSV importable without errors
  - Tax column correctly populated from TASK-060 data

---

## PHASE 32 — Final Launch Checklist

### TASK-111: Pre-Launch SEO Audit (Marketing Site)
- **Priority**: P1 | **Effort**: S | **Depends on**: TASK-049
- **Description**: Run a full SEO audit on the marketing site: ensure all pages have unique title tags and meta descriptions, add JSON-LD structured data (Organization, SoftwareApplication schema), submit sitemap to Google Search Console, fix any broken links.
- **Acceptance Criteria**:
  - Google Search Console: zero crawl errors
  - Lighthouse SEO score ≥ 90 on all key pages
  - `robots.txt` and `sitemap.xml` present and correct

### TASK-112: Cookie Consent Banner (GDPR)
- **Priority**: P0 | **Effort**: S | **Depends on**: TASK-048
- **Description**: Add a GDPR-compliant cookie consent banner to both the marketing site and dashboard. Use a lightweight library like `react-cookie-consent`. Block analytics scripts until consent is given. Store consent preference in a cookie.
- **Acceptance Criteria**:
  - Banner appears on first visit in EU regions
  - "Accept All" / "Reject Non-Essential" options
  - Google Analytics / Datadog RUM blocked until consent given

### TASK-113: Beta Testing Program
- **Priority**: P1 | **Effort**: M
- **Description**: Recruit 5–10 real hotel owners for a closed beta. Give them free access. Collect structured feedback via a Google Form or Typeform after 2 weeks of use. Track bugs via GitHub Issues. Prioritize fixes from beta feedback before public launch.
- **Acceptance Criteria**:
  - Minimum 5 beta hotels onboarded
  - At least 50 real bookings processed during beta
  - Top 10 feedback items reviewed and actioned before launch

### TASK-114: Launch Announcement & Press Kit
- **Priority**: P2 | **Effort**: S | **Depends on**: TASK-049
- **Description**: Prepare launch materials: press release draft, Product Hunt listing assets (logo, screenshots, GIF demo), social media posts (LinkedIn, Twitter/X). Create a `/press` page on the marketing site with downloadable assets.
- **Acceptance Criteria**:
  - Product Hunt listing scheduled and ready to publish
  - Press kit zip file downloadable from `/press`
  - 5 social media posts drafted and scheduled

### TASK-115: Post-Launch Retrospective & KPI Baseline
- **Priority**: P1 | **Effort**: S
- **Description**: 30 days after launch, run a retrospective. Record baseline KPIs: MRR, number of active tenants, average bookings per tenant per month, bot message volume, churn rate, NPS score. Document in an internal "Launch Report" to compare against Month 3 and Month 6 targets.
- **Acceptance Criteria**:
  - Baseline KPIs documented with actual numbers
  - Month 3 and Month 6 targets defined
  - Retrospective action items tracked in backlog

---

## Complete Project Summary (All 3 Parts)

| Document | Phases | Tasks | Key Coverage |
|---|---|---|---|
| **Part 1** | 0–8 | 001–042 | Core bot, multi-tenancy, payments, dashboard, billing, security, DevOps |
| **Part 2** | 9–18 | 043–080 | Testing, marketing site, notifications, refunds, tax, coupons, docs, ops |
| **Part 3** | 19–32 | 081–115 | Web portal, analytics, waitlist, group bookings, CDN, pen testing, accounting, launch |

### 🔢 Grand Total: **115 Tasks** across **32 Phases**

### Priority Breakdown
| Priority | Count | Meaning |
|---|---|---|
| P0 — Critical | ~25 | Must-have. Product does not function without these. |
| P1 — High | ~50 | Required for a professional, production-ready product. |
| P2 — Medium | ~40 | Important for growth and enterprise customers. |
