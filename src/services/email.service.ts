import sgMail from '@sendgrid/mail';
import { config } from '@config/env';
import { logger } from '@utils/logger';
import { Booking, Guest, RoomCategory, Tenant } from '.prisma/client';
import { format } from 'date-fns';

// In development, the API key might be a placeholder. Only set it if it looks valid.
if (config.SENDGRID_API_KEY && config.SENDGRID_API_KEY.startsWith('SG.')) {
  sgMail.setApiKey(config.SENDGRID_API_KEY);
}

export class EmailService {
  /**
   * Sends a booking confirmation email to the hotel owner/staff
   */
  static async sendBookingConfirmation(
    tenant: Tenant,
    booking: Booking,
    guest: Guest,
    room: RoomCategory,
    receiptUrl: string | null
  ): Promise<boolean> {
    try {
      const settings = tenant.settings as any;
      const notificationEmail = settings?.notificationEmail || config.SUPER_ADMIN_EMAIL;

      const msg = {
        to: notificationEmail,
        from: 'noreply@hotelbotsaas.com', // Must be verified in SendGrid
        subject: `New Booking Confirmation: ${booking.bookingReference}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: ${settings?.brandColor || '#000'}">New Booking Received!</h2>
            <p><strong>Hotel:</strong> ${tenant.name}</p>
            <p><strong>Reference:</strong> ${booking.bookingReference}</p>
            
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            
            <h3>Guest Details</h3>
            <ul>
              <li><strong>Name:</strong> ${guest.firstName} ${guest.lastName || ''}</li>
              <li><strong>Guests:</strong> ${booking.guestCount}</li>
            </ul>
            
            <h3>Stay Details</h3>
            <ul>
              <li><strong>Room:</strong> ${room.name}</li>
              <li><strong>Check-in:</strong> ${format(booking.checkIn, 'PPP')}</li>
              <li><strong>Check-out:</strong> ${format(booking.checkOut, 'PPP')}</li>
            </ul>
            
            <h3>Payment</h3>
            <p><strong>Total Paid:</strong> ${booking.totalAmountPaid} ${booking.currency.toUpperCase()}</p>
            
            ${receiptUrl ? `<div style="margin-top: 30px;"><a href="${receiptUrl}" style="background-color: ${settings?.brandColor || '#007bff'}; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Download PDF Receipt</a><p style="font-size: 12px; color: #777; margin-top: 10px;">Link expires in 7 days.</p></div>` : ''}
          </div>
        `,
      };

      if (!config.SENDGRID_API_KEY || !config.SENDGRID_API_KEY.startsWith('SG.')) {
        logger.warn(`[Email] SendGrid API Key not configured properly. Mocking email for ${booking.bookingReference}`);
        return true;
      }

      await sgMail.send(msg);
      logger.info(`[Email] Sent confirmation to ${notificationEmail} for booking ${booking.bookingReference}`);
      return true;
    } catch (error) {
      logger.error(`[Email] Failed to send confirmation for booking ${booking.bookingReference}`, { error });
      return false;
    }
  }
}
