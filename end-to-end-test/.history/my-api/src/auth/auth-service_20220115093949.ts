import jwt from 'jsonwebtoken';
import { TokenService } from './token-service';

export interface LoginInput {
  username: string
  password: string
}

export class AuthService {
  constructor(private tokenService: TokenService) {

  }

  login({ username, password }: LoginInput) {
    if(username === 'test' && password === 'test')
  }
}
