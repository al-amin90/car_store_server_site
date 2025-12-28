import { IOrder } from './order.interface';
import orderModal from './order.modal';

const createOrderInDB = async (data: IOrder) => {
  const result = await orderModal.create(data);
  return result;
};

const getOrderFromDB = async () => {
  const result = await orderModal.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await orderModal.findById(id);
  return result;
};

// const updateCarInDB = async (id: string, data: Partial<ICar>) => {
//   const result = await carModal.findByIdAndUpdate(id, data, { new: true });
//   return result;
// };

// const deleteCarFromDB = async (id: string) => {
//   const result = await carModal.findByIdAndDelete(id);
//   return result;
// };

export default {
  createOrderInDB,
  getOrderFromDB,
  getSingleOrderFromDB,
};
