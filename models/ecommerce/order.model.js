import mongoose, { mongo } from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quntity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItem: [orderItemSchema],
    address: {
      type: String,
      reuired: true,
    },
    status: {
      type: String, 
      enum: ['PENDING', 'DELIVERYING', 'DELIVERED', 'CANCELLED'],
      default: 'PENDING',
    },
  },

  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
