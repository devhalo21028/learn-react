import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

export default router;
