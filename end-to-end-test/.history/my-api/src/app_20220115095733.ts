import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes';
import { ErrorCode } from './app-constant';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use((
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextFunction,
) => {
  const status = err.status || 500;

  if (err.code === ErrorCode.INVALID_CREDENTIALS) {
    res.status(400);
    res.json({
      message: err.message,
      code: err.code,
    });
  }

  res.status();
  res.json({
    message: err.message,
    code: err.code,
  });
});

export default app;
