import logger from './logger';
import express from 'express';

const app = express();
app.use(express.json());

export default function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: any
) {
  logger.info(`${request.method} ${request.path}`);
  next();
}
