import carModal from '../car/car.modal';
import { IOrder } from './order.interface';
import orderModal from './order.modal';

const createOrderInDB = async (data: IOrder) => {
  const carId = data.car;

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
