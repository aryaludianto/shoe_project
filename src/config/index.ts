import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const port =
  process.env.NODE_ENV === 'development'
    ? process.env.SERVER_PORT
    : process.env.PORT;

export default {
  appName: process.env.APP_NAME,
  port,
  monggoUri: process.env.MONGGO_DB_URI,
};
