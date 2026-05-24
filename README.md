# Enterprise HotelBot SaaS 🏨🤖

A highly advanced, enterprise-grade AI Telegram Bot designed for Hotel Owners. Built with a strict **Multi-Tenant SaaS Architecture**, powered by **Nemotron** via OpenRouter, and backed by a robust **Supabase (PostgreSQL)** database.

This product acts as a highly professional, native AI concierge capable of conversing with guests, showing dynamic room photos, capturing secure contact details via Telegram verification, and finalizing bookings into a cloud database.

## 🌟 Core Features

- **Multi-Tenant Architecture**: A single deployment of this bot can serve hundreds of hotels. The database strictly isolates `guests`, `rooms`, and `bookings` by `hotel_id`. The bot dynamically identifies which hotel it represents based on the unique Telegram Bot Token.
- **Nemotron AI Integration**: Powered by the highly capable `nvidia/nemotron-3-nano-30b-a3b:free` model. 
- **Professional Concierge Flow**: The AI is strictly prompted to act as a high-end receptionist. It collects information sequentially (Name, Passport, Nationality, Address) rather than overwhelming the guest.
- **Telegram Native Authentication**: Implements a highly secure authentication wall. Before booking, the bot intercepts the AI and forces the user to verify their identity via Telegram's native `request_contact` feature. This guarantees spoof-proof phone number collection and prevents spam bookings.
- **Dynamic Database Photos**: Room photos are not hardcoded. The AI queries the PostgreSQL `rooms` table to pull an array of dynamic image URLs (`image_urls TEXT[]`) and sends beautiful media galleries directly to the guest.
- **Visual Inline Calendar**: Includes a zero-dependency, native Telegram inline UI calendar. When the AI needs a check-in/check-out date, the bot renders a clickable calendar in the chat, feeds the clicked date back to the AI invisibly, and resumes the flow seamlessly.
- **Resilient Infrastructure**: Wrapped in comprehensive `try/catch` handlers to protect against unexpected network drops (e.g., `ECONNRESET`) from AI APIs, ensuring the bot never crashes during high traffic.

## 🏗 Architecture & Tech Stack

- **Framework**: Telegraf (Node.js / TypeScript)
- **AI Brain**: OpenRouter API (`openai` SDK standard)
- **Database**: Supabase (PostgreSQL)

## 🚀 Quick Start Guide

### 1. Database Setup (Supabase)
1. Create a new Supabase project.
2. Open the SQL Editor and run the complete script found in `apps/mini-bot/supabase_schema.sql`.
3. This script will build the multi-tenant architecture (`hotels`, `guests`, `rooms`, `bookings`) and automatically insert your first dummy hotel ("The Grand Continental") along with dynamic room photos.

### 2. Environment Variables
In the `apps/mini-bot` directory, create a `.env` file based on `.env.example`:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
OPENROUTER_API_KEY=your_openrouter_api_key
```

*Note: The `TELEGRAM_BOT_TOKEN` in your `.env` must precisely match the token inserted into the `hotels` table during the SQL setup so the bot knows which tenant to boot up as!*

### 3. Run the Bot
```bash
cd apps/mini-bot
npm install
npm run dev
```

The bot will connect to the database, verify its tenant identity, and begin listening for Telegram messages!

## 🛡 Security & Compliance
- **Spam Prevention**: Bookings cannot be finalized without physical Telegram Phone Number verification.
- **Data Isolation**: Foreign keys with `ON DELETE CASCADE` ensure strict tenant boundaries.
- **No Credit Cards in Chat**: The AI is explicitly instructed to finalize the booking and inform the guest that payment is securely collected at the front desk.

---
*Built for the future of hospitality.*
