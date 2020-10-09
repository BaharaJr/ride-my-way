/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import chalk from 'chalk';
import '@babel/polyfill';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import router from './src/routes/index';

const swaggerDocument = YAML.load('./src/api/swagger/swagger.yaml');


const app = express();

const port = process.env.PORT;
const server = http.createServer(app);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};

app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser('process.env.COOKIE_SECRET'));
app.use(cors());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

server.listen(port, () => {
  console.log(chalk.yellow('App is Live'));
});
