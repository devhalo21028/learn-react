import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authController from './auth/auth-controller';
import greetingsController from './greeting/greeting-controller';
import { ErrorCode } from './app-constant';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authController);
app.use('/api/v1/greetings', greetingsController);

app.use((
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextFunction,
) => {
  let status = err.status || 500;

  if (err.code === ErrorCode.INVALID_CREDENTIALS) {
    status = 400;
  }

  res.status(status);
  res.json({
    message: err.message,
    code: err.code,
  });
});

export default app;
