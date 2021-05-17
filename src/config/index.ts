import dotenv from 'dotenv';
import process from 'process';

dotenv.config();
// process.env.SERVER_PORT ??
export default {
  appName: process.env.APP_NAME,
  port: process.env.PORT,
  monggoUri: process.env.MONGGO_DB_URI,
};
