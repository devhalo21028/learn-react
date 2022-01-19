import jwt from 'jsonwebtoken';
import { AUTH_SECRET_KEY } from './token-constant';

export const generateToken = (payload: any = {}): string => jwt.sign(
  payload,
  AUTH_SECRET_KEY,
  {
    expiresIn: 60 * 60,
  },
);
