/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import http from 'http';
import router from './routes/index';
import chalk from 'chalk';
import "@babel/polyfill";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');


const app = express();

const hostname = 'localhost';
const server = http.createServer(app);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser('process.env.COOKIE_SECRET'));
app.use(cors());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Something went wrong. Be assured we\'re working on it!');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});
server.listen(process.env.PORT || 5000, () => {
  console.log(chalk.yellow('App is Live'));
});
