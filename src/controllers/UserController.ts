import { Request, Response } from "express";
import { omit } from 'lodash';
import log from '../logger';
import { UserService } from '../services/UserService';

const userService = new UserService();

class UserController {
  async create(req: Request, res: Response) {
    log.info('Creating a new user');
    try {
      const user = await userService.createUser(req.body);

      return res.send(omit(user.toJSON(), 'password'));
    } catch (error) {
      log.error(error);
      return res.status(400).send(error.message);
    }

  };

  async list(req: Request, res: Response) {
    log.info('Listing users')
    const users = await userService.list();

    return res.send(users);
  }
}

export { UserController };