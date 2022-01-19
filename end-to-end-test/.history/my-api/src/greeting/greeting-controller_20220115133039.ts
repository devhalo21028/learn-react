import express, { Request, Response } from 'express';\

const router = express.Router();

export interface GreetingOutput {
  message: string
}

router.get('/', (): GreetingOutput => {
  return {
    message: 'hello world'
  }
});

export default router;
