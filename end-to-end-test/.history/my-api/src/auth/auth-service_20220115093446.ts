import jwt from 'jsonwebtoken';
import { TokenService } from './token-service';

export class AuthService {
  private secretKey = 'my secret';

  public constructor(private tokenService: TokenService) {

  }
}
