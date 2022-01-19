import jwt from 'jsonwebtoken';
import { TokenService } from './token-service';

export class AuthService {
  private secretKey = 'my secret';

  constructor(private tokenService: TokenService) {

  }
}
