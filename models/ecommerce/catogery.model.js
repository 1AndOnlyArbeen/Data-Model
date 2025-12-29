import mongooes, { mongo } from 'mongoose';

const catogerySchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Catogery = mongooes.model('Catogery', catogerySchema);
