import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export default {
  appName: process.env.APP_NAME,
  port: process.env.PORT || process.env.SERVER_PORT,
  monggoUri: process.env.MONGGO_DB_URI,
};
