import jwt from 'jsonwebtoken';

const secretKey = 'my secret';

export const generateToken = (payload: any = {}): string => jwt.sign(
  payload,
  secretKey,
  {
    expiresIn: 60 * 60,
  },
);
