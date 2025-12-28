import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      require: [true, 'email is required'],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      require: [true, 'car is required'],
    },
    quantity: {
      type: Number,
      require: [true, 'quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      require: [true, 'totalPrice is required'],
      min: [0, 'Total price cannot be negative'],
    },
  },
  {
    timestamps: true,
  },
);

const orderModal = model<IOrder>('Order', orderSchema);

export default orderModal;
