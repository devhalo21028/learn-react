import errCode from 'err-code';
import jwtMiddleware from 'express-jwt';
import { ErrorCode } from '../app-constant';
import { AUTH_SECRET_KEY } from './token-constant';
import { generateToken } from './token-service';

export interface LoginInput {
  username: string
  password: string
}

export interface LoginResult {
  token: string
}

export interface LogoutInput {
  token: string
}

export const login = ({ username, password }: LoginInput): LoginResult | Error => {
  if (username !== 'test' && password !== 'test') {
    throw errCode(new Error('Invalid username or password'), ErrorCode.INVALID_CREDENTIALS);
  }

  return {
    token: generateToken(),
  };
};

export const getAuthMiddleware = () => jwtMiddleware({
  secret: AUTH_SECRET_KEY,
});
