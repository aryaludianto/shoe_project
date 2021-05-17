import express from 'express';
import path from 'path';
import logger from './logger/logger';
import config from './config';
import mongoose from 'mongoose';
import router from './routes/index';
import loggerMiddleware from './logger/loggerMiddleWare';

const port = config.port;
const app = express();

// Configure Express to use EJS
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // define a route handler for the default Admin home page
// app.get('/admin', (req, res) => {
//   // render the index template
//   res.render('index');
// });

// Activity Logger
app.use(loggerMiddleware);

app.use(express.json());

// Real route
app.use('/product', router.product);

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
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
