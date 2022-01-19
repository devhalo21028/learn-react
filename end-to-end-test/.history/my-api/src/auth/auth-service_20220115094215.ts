import { TokenService } from './token-service';

export interface LoginInput {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}

export class AuthService {
  constructor(private tokenService: TokenService) {

  }

  login({ username, password }: LoginInput): LoginResponse | Error {
    if (username !== 'test' && password !== 'test') {

    }

    return this.tokenService.generateToken();
  }
}
