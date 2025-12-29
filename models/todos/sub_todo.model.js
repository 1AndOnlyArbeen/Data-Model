import mongoose from 'mongoose';

const subToDoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: True,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    creadtedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubToDo = mongoose.model('SubToDo', subToDoSchema);
