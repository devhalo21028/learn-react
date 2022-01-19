import express, { Request, Response } from 'express';\

const router = express.Router();

export interface GreetingOutput {
  message: string
}

router.get('/', () => {
  return 
});

export default router;
