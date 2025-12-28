import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      require: [true, 'email is required'],
      trim: true,
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      require: [true, 'car is required'],
    },
    quantity: {
      type: Number,
      require: [true, 'quantity is required'],
    },
    totalPrice: {
      type: Number,
      require: [true, 'totalPrice is required'],
    },
  },
  {
    timestamps: true,
  },
);

const orderModal = model<IOrder>('Order', orderSchema);

export default orderModal;
