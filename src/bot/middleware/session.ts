import { Middleware } from 'telegraf';
import { redisService } from '@services/redis.service';
import { BotContext, MySession } from '../context';

export function redisSession(): Middleware<BotContext> {
  return async (ctx, next) => {
    const userId = ctx.from?.id;
    const botToken = ctx.telegram.token;

    if (!userId) {
      return next();
    }

    const key = redisService.sessionKey(botToken, userId);
    
    // 1. Load session from Redis
    let session = await redisService.getJson<MySession>(key) || {} as MySession;
    
    // 2. Attach to context
    Object.defineProperty(ctx, 'session', {
      get: () => session,
      set: (newSession: MySession) => { session = newSession; }
    });

    // 3. Process the update
    await next();

    // 4. Save session back to Redis (TTL 30 minutes = 1800 seconds)
    if (session && Object.keys(session).length > 0) {
      await redisService.setJson(key, session, 1800);
    } else {
      await redisService.del(key);
    }
  };
}
