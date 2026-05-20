import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { config } from '@config/env';
import { logger } from '@utils/logger';
import { Booking, Guest, RoomCategory, Tenant } from '@generated/client';
import { format } from 'date-fns';

const s3Client = new S3Client({
  region: config.AWS_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

export class PdfService {
  /**
   * Generates a PDF receipt, uploads it to S3, and returns a signed download URL.
   */
  static async generateReceipt(
    tenant: Tenant,
    booking: Booking,
    guest: Guest,
    room: RoomCategory
  ): Promise<string | null> {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      // Header
      page.drawText(`${tenant.name} - Booking Receipt`, { x: 50, y: 750, size: 24, font: boldFont });
      
      // Info
      page.drawText(`Booking Reference: ${booking.bookingReference}`, { x: 50, y: 700, size: 12, font });
      page.drawText(`Date: ${format(new Date(), 'PPP')}`, { x: 50, y: 680, size: 12, font });
      
      // Guest
      page.drawText(`Guest Information:`, { x: 50, y: 640, size: 14, font: boldFont });
      page.drawText(`Name: ${guest.firstName} ${guest.lastName || ''}`, { x: 50, y: 620, size: 12, font });
      
      // Stay
      page.drawText(`Stay Details:`, { x: 50, y: 580, size: 14, font: boldFont });
      page.drawText(`Room: ${room.name}`, { x: 50, y: 560, size: 12, font });
      page.drawText(`Check-in: ${format(booking.checkIn, 'PPP')}`, { x: 50, y: 540, size: 12, font });
      page.drawText(`Check-out: ${format(booking.checkOut, 'PPP')}`, { x: 50, y: 520, size: 12, font });
      page.drawText(`Nights: ${booking.nightsCount}`, { x: 50, y: 500, size: 12, font });
      
      // Amount
      page.drawText(`Amount Paid: ${booking.totalAmountPaid} ${booking.currency.toUpperCase()}`, { x: 50, y: 460, size: 16, font: boldFont, color: rgb(0, 0.5, 0) });

      const pdfBytes = await pdfDoc.save();

      // Upload to S3
      const key = `receipts/${tenant.id}/${booking.bookingReference}.pdf`;
      const putCommand = new PutObjectCommand({
        Bucket: config.AWS_S3_BUCKET,
        Key: key,
        Body: pdfBytes,
        ContentType: 'application/pdf',
      });

      await s3Client.send(putCommand);

      logger.info(`[PDF] Generated and uploaded receipt ${booking.bookingReference}`);

      // Generate signed URL (valid for 7 days)
      const getCommand = new GetObjectCommand({
        Bucket: config.AWS_S3_BUCKET,
        Key: key,
      });

      const signedUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 7 * 24 * 60 * 60 });
      return signedUrl;
    } catch (error) {
      logger.error(`[PDF] Error generating receipt for ${booking.bookingReference}`, { error });
      return null;
    }
  }
}
