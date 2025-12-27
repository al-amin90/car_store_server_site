import { ICar } from './car.interface';
import carModal from './car.modal';

const createCarInDB = async (data: ICar) => {
  const result = await carModal.create(data);
  return result;
};

export default {
  createCarInDB,
};
