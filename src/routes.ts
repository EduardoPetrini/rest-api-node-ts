import { Router, Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();

let count = 0;
router.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'I\'m live', count: count++ })
});

router.post('/api/register/users', userController.create);
router.get('/api/register/users', userController.list);


export { router };