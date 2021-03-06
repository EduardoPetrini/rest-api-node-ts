import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document {
  email: String,
  name: String,
  password: string,
  createdAt: Date,
  updatedAt: Date,
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
  const user = this as UserDocument;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});


UserSchema.methods.comparePassword = function (candidatePassword: string) {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch(e => false);
};

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;