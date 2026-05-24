import { Scenes, Markup } from 'telegraf';
import { BotContext } from '../context';
import { prisma } from '@db/prisma';
import { format, isAfter, addHours } from 'date-fns';
import { logger } from '@utils/logger';
import { buildMainMenu } from '../keyboards/main-menu';

export const myBookingsScene = new Scenes.BaseScene<BotContext>('my_bookings_scene');

myBookingsScene.enter(async (ctx) => {
  try {
    const guest = await prisma.guest.findUnique({
      where: { telegramId: ctx.from!.id },
      include: {
        bookings: {
          include: {
            roomCategory: { include: { tenant: true } }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!guest || guest.bookings.length === 0) {
      await ctx.reply('You have no bookings yet.', buildMainMenu());
      return ctx.scene.leave();
    }

    await ctx.reply('Here are your bookings:');

    for (const booking of guest.bookings) {
      const room = booking.roomCategory;
      const hotel = room.tenant;
      
      // Can cancel if check-in is > 24 hours away
      const canCancel = isAfter(booking.checkIn, addHours(new Date(), 24)) && booking.status === 'confirmed';

      const msg = `🏨 *${hotel.name}*\n` +
                  `🛏 Room: ${room.name}\n` +
                  `📅 Dates: ${format(booking.checkIn, 'yyyy-MM-dd')} to ${format(booking.checkOut, 'yyyy-MM-dd')}\n` +
                  `💵 Paid: ${booking.totalAmountPaid} ${booking.currency}\n` +
                  `🔖 Status: ${booking.status.toUpperCase()}`;

      const buttons = [];
      if (canCancel) {
        buttons.push([Markup.button.callback('❌ Cancel Booking', `cancel_booking_${booking.id}`)]);
      }

      await ctx.reply(msg, {
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard(buttons)
      });
    }

    await ctx.reply('Use the menu below to navigate:', buildMainMenu());
    return ctx.scene.leave(); // We can leave immediately since we don't need to stay in the scene to handle cancel buttons if they are registered globally, BUT BaseScene actions only work if the user is in the scene. Actually, global action handlers are better for cancellations.

  } catch (err) {
    logger.error('Error fetching bookings', { error: err });
    await ctx.reply('Failed to fetch bookings.', buildMainMenu());
    return ctx.scene.leave();
  }
});
