import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.SERVER_PORT,
  monggoUri: process.env.MONGGO_DB_URI,
};
