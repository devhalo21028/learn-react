import express from 'express';

const router = express.Router();

export interface GreetingOutput {
  message: string
}

router.get('/', (): GreetingOutput => ({
  message: 'hello world',
}));

export default router;
