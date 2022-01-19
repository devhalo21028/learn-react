import jwt from 'jsonwebtoken';

export const generateToken = (payload: any = {}): string => jwt.sign(
  payload,
  AUTH_SECRET_KEY,
  {
    expiresIn: 60 * 60,
  },
);
