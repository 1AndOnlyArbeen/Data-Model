import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      lowerCase: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      lowerCase: true,
      required: [true, 'email is require'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is require'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
