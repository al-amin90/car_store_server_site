import { ICar } from './car.interface';
import carModal from './car.modal';

const createCarInDB = async (data: ICar) => {
  const result = await carModal.create(data);
  return result;
};

const getCarFromDB = async () => {
  const result = await carModal.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await carModal.findById(id);
  return result;
};

const updateCarInDB = async (id: string, data: Partial<ICar>) => {
  const result = await carModal.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteCarFromDB = async (id: string) => {
  const result = await carModal.findByIdAndDelete(id);
  return result;
};

export default {
  createCarInDB,
  getCarFromDB,
  getSingleCarFromDB,
  updateCarInDB,
  deleteCarFromDB,
};
