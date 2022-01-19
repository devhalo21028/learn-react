import jwt from 'jsonwebtoken';
import { TokenService } from './token-service';

export class AuthService {
  constructor(private tokenService: TokenService) {

  }
}
