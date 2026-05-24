import { Telegraf, Scenes } from 'telegraf';
import { config } from '@config/env';
import { logger } from '@utils/logger';
import { BotContext } from './context';
import { redisSession } from './middleware/session';
import { buildMainMenu } from './keyboards/main-menu';
import { bookingWizard } from './scenes/booking.scene';
import { myBookingsScene } from './scenes/my-bookings.scene';
import { supportScene } from './scenes/support.scene';
import { redisService } from '@services/redis.service';
import { prisma } from '@db/prisma';
import { differenceInDays, parseISO, isAfter, addHours } from 'date-fns';
import { PdfService } from '@services/pdf.service';
import { EmailService } from '@services/email.service';

// Temporary setup for development polling (TASK-005) is now migrating to BotFactory (TASK-015).

export class BotFactory {
  private static instances = new Map<string, Telegraf<BotContext>>();

  static getBot(token: string): Telegraf<BotContext> {
    if (this.instances.has(token)) {
      return this.instances.get(token)!;
    }
    const bot = createBotInstance(token);
    this.instances.set(token, bot);
    return bot;
  }
}

export function createBotInstance(token: string): Telegraf<BotContext> {
  const bot = new Telegraf<BotContext>(token);

  // 1. Middleware
  bot.use(redisSession());

  // Multi-Tenancy Middleware (TASK-014 / TASK-015)
  // Fetch tenant context and inject it into ctx.tenant
  bot.use(async (ctx, next) => {
    const cacheKey = `tenant:bot:${token}`;
    const tenantStr = await redisService.get(cacheKey);
    
    if (tenantStr) {
      ctx.tenant = JSON.parse(tenantStr);
    } else {
      const tenant = await prisma.tenant.findFirst({ where: { telegramBotToken: token } });
      if (tenant) {
        ctx.tenant = tenant;
        await redisService.setex(cacheKey, 300, JSON.stringify(tenant));
      }
    }

    if (!ctx.tenant || ctx.tenant.subscriptionStatus === 'cancelled' || ctx.tenant.subscriptionStatus === 'past_due') {
      if (ctx.message) {
        await ctx.reply('This service is currently unavailable.');
      }
      return;
    }
    
    await next();
  });

  // Set up stage for Wizard Scenes
  const stage = new Scenes.Stage<BotContext>([bookingWizard, myBookingsScene, supportScene]);
  bot.use(stage.middleware());

  // 2. Start Command
  bot.start(async (ctx) => {
    // Clear any stale session state on /start
    ctx.session = {} as any;
    
    const userName = ctx.from.first_name || 'Guest';
    const welcomeMsg = `👋 Welcome to our Hotel, ${userName}!\n\nHow can I help you today?`;
    
    await ctx.reply(welcomeMsg, buildMainMenu());
  });

  // 3. Main Menu Actions
  bot.action('action_book_room', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('booking_wizard');
  });

  bot.action('action_my_bookings', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('my_bookings_scene');
  });

  bot.action('action_support', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('support_scene');
  });

  // Global action handlers
  bot.action(/^cancel_booking_(.+)$/, async (ctx) => {
    const bookingId = ctx.match[1];
    
    try {
      const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
      if (!booking) {
        return ctx.answerCbQuery('Booking not found.', { show_alert: true });
      }

      // Cancellation rule: must be >24 hours away
      if (isAfter(booking.checkIn, addHours(new Date(), 24)) && booking.status === 'confirmed') {
        await prisma.booking.update({
          where: { id: bookingId },
          data: { status: 'cancelled' }
        });
        
        await ctx.answerCbQuery('Booking cancelled successfully.', { show_alert: true });
        
        // Update message text if possible
        if (ctx.callbackQuery.message && 'text' in ctx.callbackQuery.message) {
          await ctx.editMessageText(ctx.callbackQuery.message.text + '\n\n*STATUS: CANCELLED*', { parse_mode: 'Markdown' });
        }
      } else {
        await ctx.answerCbQuery('Cancellation only allowed >24 hours before check-in.', { show_alert: true });
      }
    } catch (err) {
      logger.error('Error cancelling booking', { error: err });
      await ctx.answerCbQuery('Error cancelling booking.');
    }
  });

  // 4. Payments Handlers
  bot.on('pre_checkout_query', async (ctx) => {
    try {
      const payload = JSON.parse(ctx.preCheckoutQuery.invoice_payload);
      const { roomId, checkIn, checkOut } = payload;

      const lockKey = redisService.bookingLockKey(roomId, checkIn, checkOut);
      const locked = await redisService.setnx(lockKey, 'locked', 300); // 5 mins

      if (!locked) {
        return ctx.answerPreCheckoutQuery(false, 'Too many people are booking this room right now. Please try again.');
      }

      let available = false;
      try {
        await prisma.$transaction(async (tx) => {
          const room = await tx.roomCategory.findUnique({ where: { id: roomId }});
          if (!room) throw new Error('Room not found');

          const checkInDate = parseISO(checkIn);
          const checkOutDate = parseISO(checkOut);

          const overlapping = await tx.booking.count({
            where: {
              roomCategoryId: roomId,
              status: { in: ['pending', 'confirmed'] },
              OR: [
                { checkIn: { lt: checkOutDate }, checkOut: { gt: checkInDate } }
              ]
            }
          });

          if (room.totalInventory - overlapping > 0) {
            available = true;
          }
        });
      } catch (err) {
        available = false;
        logger.error('Error during pre_checkout_query transaction', { error: err });
      }

      if (available) {
        await ctx.answerPreCheckoutQuery(true);
      } else {
        await redisService.del(lockKey);
        await ctx.answerPreCheckoutQuery(false, 'Sorry, this room is no longer available for your dates.');
      }
    } catch (err) {
      logger.error('Invalid pre_checkout_query payload', { error: err });
      await ctx.answerPreCheckoutQuery(false, 'Invalid booking request.');
    }
  });

  bot.on('successful_payment', async (ctx) => {
    try {
      const payment = ctx.message.successful_payment;
      const payload = JSON.parse(payment.invoice_payload);
      const { roomId, checkIn, checkOut, guests } = payload;
      
      const lockKey = redisService.bookingLockKey(roomId, checkIn, checkOut);
      
      const checkInDate = parseISO(checkIn);
      const checkOutDate = parseISO(checkOut);
      const nights = differenceInDays(checkOutDate, checkInDate);

      const guest = await prisma.guest.findUnique({ where: { telegramId: ctx.from.id } });
      const room = await prisma.roomCategory.findUnique({ where: { id: roomId } });
      
      const bookingReference = `BKG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

      const booking = await prisma.booking.create({
        data: {
          tenantId: room!.tenantId,
          guestId: guest!.id,
          roomCategoryId: roomId,
          bookingReference,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          nightsCount: nights,
          guestCount: guests,
          totalAmountPaid: payment.total_amount / 100,
          currency: payment.currency,
          status: 'confirmed',
          telegramPaymentChargeId: payment.telegram_payment_charge_id
        }
      });

      await redisService.del(lockKey);

      // Generate PDF Receipt
      const receiptUrl = await PdfService.generateReceipt(ctx.tenant!, booking, guest!, room!);
      if (receiptUrl) {
        await prisma.booking.update({
          where: { id: booking.id },
          data: { receiptPdfUrl: receiptUrl }
        });
      }

      // Send Email to Hotel Owner
      await EmailService.sendBookingConfirmation(ctx.tenant!, booking, guest!, room!, receiptUrl);

      let replyMsg = `✅ *Booking Confirmed!*\n\nReference: *${bookingReference}*\nWe look forward to hosting you!`;
      if (receiptUrl) {
        replyMsg += `\n\n📄 [Download Receipt](${receiptUrl})`;
      }

      await ctx.reply(replyMsg, { parse_mode: 'Markdown', link_preview_options: { is_disabled: true } });
    } catch (err) {
      logger.error('Error handling successful payment', { error: err });
      await ctx.reply('Your payment was successful, but there was an error processing your booking. Please contact support.');
    }
  });

  // Error handling
  bot.catch((err, ctx) => {
    logger.error(`[Bot] Error for ${ctx.updateType}`, { error: err });
  });

  return bot;
}

// Function to start polling in development (for the primary bot defined in env)
export async function launchDevBot() {
  if (config.NODE_ENV !== 'production' && config.TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN_HERE') {
    try {
      const bot = BotFactory.getBot(config.TELEGRAM_BOT_TOKEN);
      await bot.launch();
      logger.info('[Bot] Polling started in development mode');
      
      // Enable graceful stop
      process.once('SIGINT', () => bot.stop('SIGINT'));
      process.once('SIGTERM', () => bot.stop('SIGTERM'));
    } catch (error) {
      logger.error('[Bot] Failed to start polling', { error });
    }
  }
}
