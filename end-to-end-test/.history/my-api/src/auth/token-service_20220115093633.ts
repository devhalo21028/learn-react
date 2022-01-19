import jwt from 'jsonwebtoken';

export class TokenService {
  private secretKey = 'my secret';

  generateToken(payload: any = {}) {
    return jwt.sign(payload, this.secretKey, { expiresIn: 60 * 60 });
  }
}
