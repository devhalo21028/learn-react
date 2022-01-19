import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY } from './token-constant';

const ONE_HOUR = 60 * 60;

export const generateToken = (payload: any = {}): string => jwt.sign(
  payload,
  AUTH_SECRET_KEY,
  {
    expiresIn: ONE_HOUR,
  },
);
