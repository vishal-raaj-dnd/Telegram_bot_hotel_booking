import { Scenes, Composer, Markup } from 'telegraf';
import { BotContext } from '../context';
import { buildCalendar } from '../keyboards/calendar';
import { isBefore, isSameDay, parseISO, differenceInDays } from 'date-fns';
import { prisma } from '@db/prisma';
import { logger } from '@utils/logger';
import { encrypt } from '@utils/crypto';
import { config } from '@config/env';

// ─────────────────────────────────────────────────────────────────
// Step 1: Ask Check-In Date
// ─────────────────────────────────────────────────────────────────
const stepCheckIn = new Composer<BotContext>();

// Handlers for Check-In calendar
stepCheckIn.action(/^checkin_nav_(\d+)_(\d+)$/, async (ctx) => {
  const year = parseInt(ctx.match[1], 10);
  const month = parseInt(ctx.match[2], 10);
  await ctx.editMessageReplyMarkup(buildCalendar(year, month, 'checkin').reply_markup);
  await ctx.answerCbQuery();
});

stepCheckIn.action(/^checkin_ignore/, async (ctx) => {
  await ctx.answerCbQuery();
});

stepCheckIn.action(/^checkin_date_(.+)$/, async (ctx) => {
  const dateStr = ctx.match[1];
  ctx.session.booking = { checkIn: dateStr };
  
  await ctx.answerCbQuery(`Check-in: ${dateStr}`);
  
  // Ask for check-out date, starting at the month of check-in
  const [year, month] = dateStr.split('-').map(Number);
  await ctx.editMessageText(
    `✅ Check-in: *${dateStr}*\n\n📅 Now, please select your check-out date:`,
    { parse_mode: 'Markdown', ...buildCalendar(year, month - 1, 'checkout') }
  );
  
  return ctx.wizard.next();
});

// Fallback for non-actions
stepCheckIn.use(async (ctx) => {
  // If user sends text, ignore or remind them
  if (ctx.message) {
    await ctx.reply('Please select a check-in date using the calendar above.');
  }
});

// ─────────────────────────────────────────────────────────────────
// Step 2: Ask Check-Out Date
// ─────────────────────────────────────────────────────────────────
const stepCheckOut = new Composer<BotContext>();

stepCheckOut.action(/^checkout_nav_(\d+)_(\d+)$/, async (ctx) => {
  const year = parseInt(ctx.match[1], 10);
  const month = parseInt(ctx.match[2], 10);
  await ctx.editMessageReplyMarkup(buildCalendar(year, month, 'checkout').reply_markup);
  await ctx.answerCbQuery();
});

stepCheckOut.action(/^checkout_ignore/, async (ctx) => {
  await ctx.answerCbQuery();
});

stepCheckOut.action(/^checkout_date_(.+)$/, async (ctx) => {
  const checkOutStr = ctx.match[1];
  const checkInStr = ctx.session.booking?.checkIn;
  
  if (!checkInStr) {
    await ctx.answerCbQuery('Session expired. Please restart.');
    return ctx.scene.leave();
  }

  const checkInDate = parseISO(checkInStr);
  const checkOutDate = parseISO(checkOutStr);

  if (isBefore(checkOutDate, checkInDate) || isSameDay(checkOutDate, checkInDate)) {
    await ctx.answerCbQuery('Check-out must be AFTER check-in!', { show_alert: true });
    return;
  }

  if (!ctx.session.booking) {
    ctx.session.booking = {};
  }
  ctx.session.booking.checkOut = checkOutStr;
  await ctx.answerCbQuery(`Check-out: ${checkOutStr}`);

  const guestsKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('1 Guest', 'guests_1'), Markup.button.callback('2 Guests', 'guests_2')],
    [Markup.button.callback('3 Guests', 'guests_3'), Markup.button.callback('4+ Guests', 'guests_4')]
  ]);

  await ctx.editMessageText(
    `✅ Check-in: *${checkInStr}*\n✅ Check-out: *${checkOutStr}*\n\n👥 How many guests?`,
    { parse_mode: 'Markdown', ...guestsKeyboard }
  );

  return ctx.wizard.next();
});

stepCheckOut.use(async (ctx) => {
  if (ctx.message) {
    await ctx.reply('Please select a check-out date using the calendar above.');
  }
});

// ─────────────────────────────────────────────────────────────────
// Step 3: Ask Guests & Show Available Rooms
// ─────────────────────────────────────────────────────────────────
const stepGuests = new Composer<BotContext>();

stepGuests.action(/^guests_(\d+)$/, async (ctx) => {
  const guests = parseInt(ctx.match[1], 10);
  if (ctx.session.booking) {
    ctx.session.booking.guestCount = guests;
  }
  await ctx.answerCbQuery();

  await ctx.editMessageText('🔍 Searching for available rooms...');

  try {
    // In Phase 2, we will filter by ctx.tenant!.id. For now, we take all rooms.
    const rooms = await prisma.roomCategory.findMany({
      where: {
        isActive: true,
        maxGuests: { gte: guests }
      }
    });

    if (rooms.length === 0) {
      await ctx.reply('Sorry, no rooms are available for that number of guests.');
      return ctx.scene.leave();
    }

    // Display rooms as cards (multiple messages or one big message)
    // Telegram allows sending photos with inline keyboards
    for (const room of rooms) {
      const caption = `🛏 *${room.name}*\n` +
                      `💵 ${room.pricePerNight} ${room.currency} / night\n` +
                      `👥 Max Guests: ${room.maxGuests}\n\n` +
                      `${room.description}`;
      
      const keyboard = Markup.inlineKeyboard([
        Markup.button.callback('✅ Select This Room', `select_room_${room.id}`)
      ]);

      if (room.imageUrls && room.imageUrls.length > 0) {
        await ctx.replyWithPhoto(room.imageUrls[0], { caption, parse_mode: 'Markdown', ...keyboard });
      } else {
        await ctx.reply(caption, { parse_mode: 'Markdown', ...keyboard });
      }
    }
    
    await ctx.reply('Please tap "Select This Room" on your preferred option.');
    return ctx.wizard.next();
    
  } catch (error) {
    logger.error('Error fetching rooms', { error });
    await ctx.reply('An error occurred while searching for rooms. Please try again later.');
    return ctx.scene.leave();
  }
});

stepGuests.use(async (ctx) => {
  if (ctx.message) {
    await ctx.reply('Please select the number of guests using the buttons.');
  }
});

// ─────────────────────────────────────────────────────────────────
// Step 4: Handle Room Selection
// ─────────────────────────────────────────────────────────────────
const stepRoomSelection = new Composer<BotContext>();

stepRoomSelection.action(/^select_room_(.+)$/, async (ctx) => {
  const roomId = ctx.match[1];
  if (ctx.session.booking) {
    ctx.session.booking.roomCategoryId = roomId;
  }
  await ctx.answerCbQuery();
  
  // Calculate Summary
  const b = ctx.session.booking!;
  const checkIn = parseISO(b.checkIn!);
  const checkOut = parseISO(b.checkOut!);
  const nights = differenceInDays(checkOut, checkIn);
  
  const room = await prisma.roomCategory.findUnique({ where: { id: roomId }});
  if (!room) {
    await ctx.reply('Error: Room not found.');
    return ctx.scene.leave();
  }
  
  const total = Number(room.pricePerNight) * nights;
  b.totalAmountDue = total;
  b.currency = room.currency;

  const summary = `📝 *Booking Summary*\n\n` +
                  `🛏 Room: ${room.name}\n` +
                  `📅 Check-in: ${b.checkIn}\n` +
                  `📅 Check-out: ${b.checkOut}\n` +
                  `🌙 Nights: ${nights}\n` +
                  `👥 Guests: ${b.guestCount}\n` +
                  `💵 Total: ${total} ${room.currency}\n\n` +
                  `To proceed, please share your contact number.`;

  await ctx.reply(summary, {
    parse_mode: 'Markdown',
    reply_markup: {
      keyboard: [[{ text: '📱 Share Phone Number', request_contact: true }]],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  });
  
  return ctx.wizard.next();
});

stepRoomSelection.use(async (ctx) => {
  if (ctx.message) {
    await ctx.reply('Please select a room by tapping one of the inline buttons.');
  }
});

// ─────────────────────────────────────────────────────────────────
// Step 5: Contact & Payment Invoice
// ─────────────────────────────────────────────────────────────────
const stepPayment = new Composer<BotContext>();

stepPayment.on('contact', async (ctx) => {
  const contact = ctx.message.contact;
  if (contact.user_id !== ctx.from.id) {
    await ctx.reply('Please use the button to share your own contact number.');
    return;
  }

  const phone = contact.phone_number;
  const telegramId = ctx.from.id;
  
  // Encrypt phone number and save to DB
  await prisma.guest.upsert({
    where: { telegramId: telegramId },
    update: { phoneNumber: encrypt(phone) },
    create: {
      telegramId: telegramId,
      firstName: ctx.from.first_name || 'Guest',
      lastName: ctx.from.last_name || null,
      phoneNumber: encrypt(phone)
    }
  });

  await ctx.reply('Thank you! Generating your invoice...', {
    reply_markup: { remove_keyboard: true }
  });

  const b = ctx.session.booking!;
  const room = await prisma.roomCategory.findUnique({ where: { id: b.roomCategoryId }});
  
  if (!room) {
    await ctx.reply('Error: Room not found.');
    return ctx.scene.leave();
  }
  
  // Pre-checkout logic will need this payload
  const payload = JSON.stringify({
    checkIn: b.checkIn,
    checkOut: b.checkOut,
    roomId: b.roomCategoryId,
    guests: b.guestCount
  });

  const price = b.totalAmountDue! * 100; // Cents

  await ctx.replyWithInvoice({
    title: `Booking: ${room.name}`,
    description: `${b.checkIn} to ${b.checkOut} (${b.guestCount} Guests)`,
    payload: payload,
    provider_token: config.STRIPE_PROVIDER_TOKEN || 'PROVIDER_TOKEN',
    currency: b.currency!,
    prices: [{ label: 'Total', amount: price }]
  });

  // Scene ends here. Payments and pre_checkout_query handled at bot level.
  return ctx.scene.leave();
});

stepPayment.use(async (ctx) => {
  if (ctx.message) {
    await ctx.reply('Please share your contact number using the button provided.', {
      reply_markup: {
        keyboard: [[{ text: '📱 Share Phone Number', request_contact: true }]],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    });
  }
});

// ─────────────────────────────────────────────────────────────────
// Wizard Scene Export
// ─────────────────────────────────────────────────────────────────
export const bookingWizard = new Scenes.WizardScene<BotContext>(
  'booking_wizard',
  stepCheckIn,
  stepCheckOut,
  stepGuests,
  stepRoomSelection,
  stepPayment
);

// We add an entry point trigger manually in the bot setup, but we also can handle a starting message
bookingWizard.enter(async (ctx) => {
  ctx.session.booking = {};
  const now = new Date();
  await ctx.reply('📅 Please select your check-in date:', buildCalendar(now.getFullYear(), now.getMonth(), 'checkin'));
});
