import { Router } from 'express';
import carController from './car.controller';

const carRouter = Router();

carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getCar);
carRouter.put('/:carId', carController.updateCar);
carRouter.get('/:carId', carController.getSingleCar);
carRouter.delete('/:carId', carController.deleteCar);

export default carRouter;
