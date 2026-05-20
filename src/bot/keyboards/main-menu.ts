import { Markup } from 'telegraf';

export const buildMainMenu = () => {
  return Markup.inlineKeyboard([
    [Markup.button.callback('📅 Book a Room', 'action_book_room')],
    [Markup.button.callback('🧳 My Bookings', 'action_my_bookings')],
    [Markup.button.callback('❓ Help / Support', 'action_support')]
  ]);
};
