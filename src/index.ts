import express from 'express';
import path from 'path';
import logger from './logger';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res) => {
  // render the index template
  res.render('index');
});

// start the Express server
app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}`);
});
