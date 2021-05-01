import winston from "winston";

export default winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.printf((info) => {
      const log = `${info.timestamp} ${info.level}\t: ${info.message}`;

      return info.stack ? `${log}\n${info.stack}` : log;
    })
  ),
  transports: [new winston.transports.Console()],
});
