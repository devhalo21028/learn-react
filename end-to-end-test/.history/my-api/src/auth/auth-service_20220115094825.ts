import 
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

  }

  return {
    token: generateToken(),
  };
};
