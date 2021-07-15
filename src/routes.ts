import { Router, Request, Response } from 'express';

const router = Router();
let count = 0;
router.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'I\'m live', count: count++ })
});


export { router };