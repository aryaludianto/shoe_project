import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

export default {
  appName: process.env.APP_NAME,
  port: process.env.PORT,
  monggoUri: process.env.MONGGO_DB_URI,
};
