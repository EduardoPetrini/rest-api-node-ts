import { Router, Request, Response } from 'express';
import { UserController } from './controllers/UserController';
import validateRequest from './middleware/ValidateSchemaRequest';
import { createUserSchema } from './schemas/UserSchema';

const router = Router();
const userController = new UserController();

let count = 0;
router.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'I\'m live', count: count++ })
});

router.post('/api/register/users', validateRequest(createUserSchema), userController.create);
router.get('/api/register/users', userController.list);


export { router };