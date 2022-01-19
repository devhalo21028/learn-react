import express, { Request, Response } from 'express';
import { login, LoginInput } from '../auth/auth-service';

const router = express.Router();

router.post('/login', (req: Request, res: Response, _: any) => {
  const {

  } = req.body as LoginInput;
});

export default router;
