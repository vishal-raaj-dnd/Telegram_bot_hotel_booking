import winston from 'winston';

const { combine, timestamp, printf, colorize, errors } = winston.format;

// ─────────────────────────────────────────────────────────────────
// Custom log format
// ─────────────────────────────────────────────────────────────────
const logFormat = printf((info) => {
  const level = String(info.level);
  const message = String(info.message);
  const ts = String(info['timestamp'] ?? '');
  const stack = info['stack'] ? String(info['stack']) : undefined;
  // Exclude standard fields from meta
  const { level: _l, message: _m, timestamp: _t, stack: _s, ...meta } = info as Record<string, unknown>;
  const metaStr = Object.keys(meta).length ? `\n  ${JSON.stringify(meta, null, 2)}` : '';
  return `${ts} [${level}] ${stack ?? message}${metaStr}`;
});

// ─────────────────────────────────────────────────────────────────
// Logger singleton
// ─────────────────────────────────────────────────────────────────
export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: combine(
    errors({ stack: true }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Console output (colorized in dev, plain in prod)
    new winston.transports.Console({
      format:
        process.env.NODE_ENV !== 'production'
          ? combine(colorize(), errors({ stack: true }), timestamp({ format: 'HH:mm:ss' }), logFormat)
          : logFormat,
    }),
    // File transport for persistent logs
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 10 * 1024 * 1024, // 10 MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      maxsize: 10 * 1024 * 1024,
      maxFiles: 10,
    }),
  ],
  // Prevent crashes from unhandled logger errors
  exitOnError: false,
});
