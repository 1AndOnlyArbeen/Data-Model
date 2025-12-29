import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required '],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
