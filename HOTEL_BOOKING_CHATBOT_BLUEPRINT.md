# 🏨 Multi-Tenant Hotel Booking Telegram Chatbot - Architecture & Blueprint

This document outlines the industry-standard architecture, technology stack, and implementation blueprint for a complete end-to-end multi-tenant Telegram chatbot for hotel booking.

## 1. Business Model & System Overview

This platform is designed as a **B2B SaaS (Software as a Service)** product. 
* **The Customers (Tenants)**: Hotel owners who pay a subscription fee to use our platform.
* **The End Users**: The hotel's guests who use the Telegram bot to book rooms.
* **The Product**: We provide a "White-Label" Telegram bot and an admin dashboard to each hotel owner.

### How the Multi-Tenant White-Label System Works
1. **Hotel Registration & Subscription**: A hotel owner visits our website, signs up, and sets up a recurring payment (e.g., via Stripe Subscriptions).
2. **Bot Creation**: The hotel owner talks to `@BotFather` on Telegram to create their own custom bot (e.g., `@TheGrandHotelBot`) and receives a Bot Token.
3. **Provisioning**: The owner pastes their Bot Token into our Web Dashboard.
4. **Dynamic Routing**: Our backend dynamically links their Bot Token to their `tenant_id` and sets up a webhook. From then on, any messages sent to `@TheGrandHotelBot` are routed to our servers, but processed specifically for that hotel's database records.

## 2. Technology Stack

### Backend
* **Language/Framework**: Node.js with NestJS or Express (TypeScript is mandatory for enterprise scale).
* **Bot Framework**: `telegraf.js` (Node.js) - Excellent support for scenes, sessions, and webhooks.
* **State Management (Sessions)**: Redis - Crucial for managing conversational states across distributed server instances.

### Database
* **Primary Relational DB**: PostgreSQL - Ideal for structured relational data, transactions (critical for bookings), and multi-tenancy (using Row-Level Security or a `tenant_id` on all tables).
* **ORM**: Prisma or TypeORM.

### Third-Party Integrations
* **NLP (Optional but recommended)**: Google Dialogflow or OpenAI API to parse free-text inputs (e.g., "I need a room for 2 nights next Tuesday").
* **Payment Gateway**: Stripe (supports Telegram Payments API natively).
* **Cloud Storage**: AWS S3 or Cloudinary (for hotel/room images).

### Infrastructure & Deployment
* **Hosting**: AWS ECS / Google Cloud Run / Vercel / Render (Docker containerized).
* **Architecture**: Microservices or modular monolith.
* **Communication**: Webhooks (Do NOT use long polling for production).

## 3. Database Architecture (Key Entities)

* **Tenants (Hotels)**: `id`, `name`, `telegram_bot_token`, `webhook_url`, `settings`
* **Users (Guests)**: `telegram_id`, `first_name`, `phone_number`, `language_code`
* **Properties/Rooms**: `id`, `tenant_id`, `room_type`, `price`, `capacity`, `images`
* **Bookings**: `id`, `tenant_id`, `user_telegram_id`, `room_id`, `check_in`, `check_out`, `status` (pending, confirmed, cancelled), `payment_intent_id`

## 4. Conversational Flow (The Bot UX)

1. `/start` **Command**: Welcome message greeting the user.
2. **Main Menu (Inline Keyboard)**:
   * 📅 Book a Room
   * 🧳 My Bookings
   * ❓ Help / Contact Desk
3. **Booking Flow**:
   * **Dates**: Bot asks for Check-in and Check-out dates (using an inline Telegram calendar).
   * **Guests**: Ask for number of adults/children.
   * **Search Results**: Send a carousel of available room types with pictures and prices.
   * **Selection**: User clicks "Select" on a room.
   * **Contact Info**: Request phone number (using Telegram's `request_contact` button for frictionless UX).
   * **Payment**: Generate a Telegram Invoice.
   * **Confirmation**: Send booking reference and PDF receipt.

## 5. Development Phases

### Phase 1: Foundation (MVP)
* Setup Node.js backend and PostgreSQL database.
* Implement the core bot using polling for local development.
* Build the static conversational flow (Hardcoded single hotel).
* Implement the booking state machine using Redis.

### Phase 2: Multi-Tenancy & Webhooks
* Upgrade database schema with `tenant_id`.
* Implement dynamic webhook registration. When a new hotel signs up, the backend automatically calls `setWebhook` on the Telegram API with their bot token.
* Create a basic Web Dashboard (React/Next.js) for hotel owners to view bookings.

### Phase 3: Payments & Production Polish
* Integrate Stripe with Telegram Payments.
* Implement date collision logic (prevent double booking).
* Containerize with Docker.
* Setup CI/CD pipeline (GitHub Actions -> Cloud platform).

## 6. Critical Implementation Details

* **Idempotency**: Webhooks can be delivered multiple times. Always check if an `update_id` has been processed.
* **Concurrency**: Use database row locking (`SELECT FOR UPDATE`) when confirming a booking to prevent two users from booking the last room simultaneously.
* **Rate Limiting**: Telegram has strict rate limits (e.g., 30 messages per second). Implement a message queuing system (like BullMQ) if broadcasting messages.
* **Statelessness**: The Node.js instances must be stateless. All conversational state (e.g., knowing the user is currently selecting a date) must live in Redis.

## 7. Next Steps to Begin
1. Initialize the project repository (e.g., `npm init -y`, setup TypeScript).
2. Set up the PostgreSQL schema based on the structure above.
3. Obtain a test Bot Token from `@BotFather`.
4. Begin writing the foundational bot logic using `telegraf.js`.
