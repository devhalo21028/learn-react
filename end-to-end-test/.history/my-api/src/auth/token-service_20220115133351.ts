import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY } from './token-constant';

const EXPIRES_IN_ONE_HOUR = 60 * 60;

export const generateToken = (payload: any = {}): string => jwt.sign(
  payload,
  AUTH_SECRET_KEY,
  {
    expiresIn: EXPIRES_IN_ONE_HOUR,
  },
);
