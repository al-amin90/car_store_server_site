import mongoose from 'mongoose';
import carModal from '../car/car.modal';
import { IOrder } from './order.interface';
import orderModal from './order.modal';

const createOrderInDB = async (data: IOrder) => {
  const carId = data.car;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    throw new Error('Invalid car ID format');
  }

  // Validate quantity
  if (data.quantity <= 0) {
    throw new Error('Quantity must be greater than 0');
  }

  // Check if car exists first
  const existingCar = await carModal.findById(carId);

  if (!existingCar) {
    throw new Error('Car not found');
  }

  if (!existingCar.inStock) {
    throw new Error('Car is currently out of stock');
  }

  if (existingCar.quantity < data.quantity) {
    throw new Error(
      `Insufficient quantity available. Only ${existingCar.quantity} units in stock`,
    );
  }

  const car = await carModal.findOneAndUpdate(
    { _id: carId, inStock: true, quantity: { $gte: data.quantity } },
    [
      {
        $set: {
          quantity: { $subtract: ['$quantity', data.quantity] },
        },
      },
      {
        $set: {
          inStock: {
            $cond: {
              if: { $eq: ['$quantity', 0] },
              then: false,
              else: true,
            },
          },
        },
      },
    ],
    { new: true, updatePipeline: true },
  );

  if (!car) {
    throw new Error('Car is out of stock or insufficient quantity available');
  }

  const result = await orderModal.create(data);

  return result;
};

const getOrderFromDB = async () => {
  const result = await orderModal.find();
  return result;
};

export default {
  createOrderInDB,
  getOrderFromDB,
};
