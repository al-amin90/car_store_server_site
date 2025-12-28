import { Types } from 'mongoose';

export interface IOrder {
  email: string;
  quantity: number;
  totalPrice: number;
  car: Types.ObjectId;
}
