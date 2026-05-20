// ─────────────────────────────────────────────────────────────────
// Shared TypeScript types & interfaces for HotelBot SaaS
// ─────────────────────────────────────────────────────────────────

// ── Tenant ───────────────────────────────────────────────────────

export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'cancelled' | 'suspended';

export interface Tenant {
  id: string;
  name: string;
  telegramBotToken: string; // stored encrypted in DB
  subscriptionStatus: SubscriptionStatus;
  stripeCustomerId?: string;
  settings: TenantSettings;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TenantSettings {
  welcomeMessage?: string;
  timezone?: string;
  currency?: string;       // ISO 4217, e.g. "USD"
  notificationEmail?: string;
  defaultLanguage?: string; // BCP 47 language tag, e.g. "en"
  brandColor?: string;      // hex color for email templates
}

// ── Guest ────────────────────────────────────────────────────────

export interface Guest {
  id: string;
  telegramId: number;
  firstName: string;
  lastName?: string;
  phoneNumber?: string; // stored encrypted in DB
  languageCode?: string;
  optInNotifications: boolean;
  createdAt: Date;
}

// ── Room Category ────────────────────────────────────────────────

export interface RoomCategory {
  id: string;
  tenantId: string;
  name: string;
  description: string;
  pricePerNight: number;
  currency: string;
  maxGuests: number;
  totalInventory: number;
  imageUrls: string[];
  amenities: string[];
  isActive: boolean;
  createdAt: Date;
}

// ── Booking ──────────────────────────────────────────────────────

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'refunded';

export interface Booking {
  id: string;
  tenantId: string;
  guestId: string;
  roomCategoryId: string;
  bookingReference: string; // e.g. GRD-2405-XK91
  checkIn: Date;
  checkOut: Date;
  nightsCount: number;
  guestCount: number;
  totalAmountPaid: number;
  currency: string;
  status: BookingStatus;
  paymentIntentId?: string;
  telegramPaymentChargeId?: string;
  receiptPdfUrl?: string;
  reviewSentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// ── Bot Session (stored in Redis) ────────────────────────────────

export interface BookingDraft {
  checkIn?: string;       // YYYY-MM-DD
  checkOut?: string;      // YYYY-MM-DD
  guestCount?: number;
  roomCategoryId?: string;
  totalAmountDue?: number;
  currency?: string;
}

export interface BotSession {
  step?: string;
  booking?: BookingDraft;
  calendarYear?: number;
  calendarMonth?: number;
}

// ── API Response wrapper ─────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
