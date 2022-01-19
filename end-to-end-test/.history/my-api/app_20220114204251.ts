import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((err: any, req: Request, res: Response, _: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: err,
  })
});
