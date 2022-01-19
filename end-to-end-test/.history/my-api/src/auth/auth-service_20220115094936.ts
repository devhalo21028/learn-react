import errCode from 'err-code';
import { generateToken } from './token-service';

export interface LoginInput {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export const login = ({ username, password }: LoginInput): LoginResponse | Error => {
  if (username !== 'test' && password !== 'test') {
    throw errCode('Invalid username or password', 'INVALID_CREDENTIALS');
  }

  return {
    token: generateToken(),
  };
};
