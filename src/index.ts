import express, { Request, Response } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './api/routes';
import logger from './api/middlewares/logger.middleware';
import errorHandler from './api/middlewares/error-handler.middleware';
import { CustomError } from './api/models/custom-error.model';
import * as MySQLConnector from './api/utils/mysql.connector';

const app = express();
const port = 3000;

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
  //console.log('JWT', generateToken());
}

// create database pool
MySQLConnector.init();

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

// add logger middleware
app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/error', function (req: express.Request, res: express.Response) {
  const car = { model: 'Santa Fe', year: 2010, brand: 'Hyundai' };

  // forcing to trigger an error
  throw new CustomError("error msg", 500, {"endpoint": "/error"});

  res.send(`The car model is ${car.model}`);
});

app.use('/api/', routes);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});