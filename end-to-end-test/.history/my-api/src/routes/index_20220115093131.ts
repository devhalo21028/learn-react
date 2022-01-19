import express from 'express';

const router = express.Router();

router.get('/login', (req, res, next) => {
  console.log('test');
});

export default router;
