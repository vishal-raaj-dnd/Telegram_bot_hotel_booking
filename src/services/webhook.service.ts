import { Tenant } from '.prisma/client';
import { logger } from '@utils/logger';
import { BotFactory } from '@bot/index';

export class WebhookService {
  /**
   * Registers a webhook for the tenant's bot with Telegram.
   * @param tenant The tenant record
   * @param baseUrl The base URL of the API server (e.g., https://api.yourdomain.com)
   */
  static async register(tenant: Tenant, baseUrl: string): Promise<boolean> {
    try {
      const token = tenant.telegramBotToken;
      if (!token) {
        logger.warn(`[Webhook] Cannot register webhook: Tenant ${tenant.id} has no bot token`);
        return false;
      }

      const bot = BotFactory.getBot(token);
      const webhookUrl = `${baseUrl.replace(/\/$/, '')}/webhook/${token}`;
      
      const success = await bot.telegram.setWebhook(webhookUrl);
      
      if (success) {
        logger.info(`[Webhook] Successfully registered webhook for tenant ${tenant.id} at ${webhookUrl}`);
      } else {
        logger.warn(`[Webhook] Telegram returned false when registering webhook for tenant ${tenant.id}`);
      }
      
      return success;
    } catch (error) {
      logger.error(`[Webhook] Error registering webhook for tenant ${tenant.id}`, { error });
      return false;
    }
  }

  /**
   * Unregisters a webhook for the tenant's bot with Telegram.
   * @param tenant The tenant record
   */
  static async unregister(tenant: Tenant): Promise<boolean> {
    try {
      const token = tenant.telegramBotToken;
      if (!token) {
        return false;
      }

      const bot = BotFactory.getBot(token);
      const success = await bot.telegram.deleteWebhook({ drop_pending_updates: true });
      
      if (success) {
        logger.info(`[Webhook] Successfully unregistered webhook for tenant ${tenant.id}`);
      }
      
      return success;
    } catch (error) {
      logger.error(`[Webhook] Error unregistering webhook for tenant ${tenant.id}`, { error });
      return false;
    }
  }
}
