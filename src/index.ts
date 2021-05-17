import express from 'express';
import path from 'path';
import logger from './logger/logger';
import config from './config';
import mongoose from 'mongoose';
import router from './routes/index';
import loggerMiddleware from './logger/loggerMiddleWare';

const port = process.env.PORT || config.port;
const app = express();

// Front-end
app.use(express.static('client'));

// Activity Logger
app.use(loggerMiddleware);

app.use(express.json());

// Real route
app.use('/product', router.product);

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose.connect(config.monggoUri, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
});

mongoose.connection
  .once('open', () => {
    logger.info('Database is connected');
  })
  .on('error', (error) => {
    logger.error('Connection error:', error);
  });

mongoose.Promise = global.Promise;

// start the Express server
app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}`);
});
