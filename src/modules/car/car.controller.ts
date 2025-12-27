import { Request, Response } from 'express';
import carService from './car.service';

const createCar = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await carService.createCarInDB(payload);
    res.status(200).json({
      message: 'Create Car successfully!',
      success: true,
      result,
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({
      message: 'Failed to Create Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

export default {
  createCar,
};
