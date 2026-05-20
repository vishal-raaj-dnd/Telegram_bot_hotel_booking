import { Scenes, Markup } from 'telegraf';
import { BotContext } from '../context';
import { prisma } from '@db/prisma';
import { logger } from '@utils/logger';
import { buildMainMenu } from '../keyboards/main-menu';

export const supportScene = new Scenes.BaseScene<BotContext>('support_scene');

supportScene.enter(async (ctx) => {
  // Phase 1: get the first tenant (single bot mode)
  const tenant = await prisma.tenant.findFirst();
  if (!tenant) {
    await ctx.reply('Support information is unavailable right now.', buildMainMenu());
    return ctx.scene.leave();
  }

  const settings: any = tenant.settings || {};
  const email = settings.notificationEmail || 'Not provided';
  const phone = settings.supportPhone || 'Not provided';

  const msg = `❓ *Help & Support*\n\n` +
              `You can reach us through the following channels:\n` +
              `📧 Email: ${email}\n` +
              `📞 Phone: ${phone}\n\n` +
              `Would you like to send us a message right now?`;

  await ctx.reply(msg, {
    parse_mode: 'Markdown',
    ...Markup.inlineKeyboard([
      [Markup.button.callback('✉️ Send a Message', 'support_send_msg')],
      [Markup.button.callback('⬅️ Main Menu', 'action_main_menu')]
    ])
  });
});

supportScene.action('support_send_msg', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply('Please type your message below:', Markup.removeKeyboard());
  ctx.session.step = 'awaiting_support_message';
});

supportScene.action('action_main_menu', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.leave();
  await ctx.reply('Main Menu', buildMainMenu());
});

supportScene.on('text', async (ctx) => {
  if (ctx.session.step === 'awaiting_support_message') {
    const message = ctx.message.text;
    
    // Log message for now. Later: send email or notify staff
    logger.info(`Support message from ${ctx.from.id}: ${message}`);
    
    ctx.session.step = undefined;
    await ctx.reply('✅ Your message has been sent to the hotel staff. We will get back to you soon!', buildMainMenu());
    return ctx.scene.leave();
  } else {
    await ctx.reply('Please use the menu options.', buildMainMenu());
    return ctx.scene.leave();
  }
});
