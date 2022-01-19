import express, { Request, Response } from 'express';
import { login, LoginInput } from './auth-service';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const {
    username,
    password,
  } = req.body as LoginInput;

  const result = login({ username, password });

  res.json(result);
});

export default router;
