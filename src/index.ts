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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default Admin home page
app.get('/', (req, res) => {
  // render the index template
  res.render('index');
});

// app.use(bodyParser.text({ type: 'text/html' }));
// app.use(express.json());

// Activity Logger
app.use(loggerMiddleware);

// Route Testing
app.use('/test', router.test);

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
