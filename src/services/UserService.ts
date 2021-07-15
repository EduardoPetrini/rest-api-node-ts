import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from '../models/UserModel';

class UserService {

  async createUser(input: DocumentDefinition<UserDocument>) {
    try { return await User.create(input); }
    catch (error) {
      throw new Error(error);
    }
  };

  async list() {
    return await User.find();
  }
}

export { UserService };

