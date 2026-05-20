// ─────────────────────────────────────────────────────────────────
// Shared TypeScript types & interfaces for HotelBot SaaS
// ─────────────────────────────────────────────────────────────────

import { Tenant as PrismaTenant, Guest as PrismaGuest, RoomCategory as PrismaRoomCategory, Booking as PrismaBooking } from '.prisma/client';

export type Tenant = PrismaTenant;
export type Guest = PrismaGuest;
export type RoomCategory = PrismaRoomCategory;
export type Booking = PrismaBooking;

export interface TenantSettings {
  welcomeMessage?: string;
  timezone?: string;
  currency?: string;       // ISO 4217, e.g. "USD"
  notificationEmail?: string;
  defaultLanguage?: string; // BCP 47 language tag, e.g. "en"
  brandColor?: string;      // hex color for email templates
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
