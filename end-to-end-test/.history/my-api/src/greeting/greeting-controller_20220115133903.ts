import express, { Request, Response } from 'express';

const router = express.Router();

export interface GreetingOutput {
  message: string
}

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

export default router;
