import { Request, Response } from 'express';
import carService from './car.service';
import mongoose from 'mongoose';

const createCar = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await carService.createCarInDB(payload);
    res.status(200).json({
      message: 'Create Car successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Create Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const getCar = async (req: Request, res: Response) => {
  try {
    const result = await carService.getCarFromDB();
    res.status(200).json({
      message: 'Cars retrieved successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Get all Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  const { carId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      throw new Error('Invalid car ID format');
    }

    const result = await carService.getSingleCarFromDB(carId);
    res.status(200).json({
      message: 'Cars retrieved successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Get Single Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  const { carId } = req.params;
  const payload = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      throw new Error('Invalid car ID format');
    }

    const result = await carService.updateCarInDB(carId, payload);
    res.status(200).json({
      message: 'Car updated successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to update Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  const { carId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      throw new Error('Invalid car ID format');
    }
    const result = await carService.deleteCarFromDB(carId);
    res.status(200).json({
      message: 'Car deleted successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Delete Car!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

export default {
  createCar,
  getCar,
  getSingleCar,
  updateCar,
  deleteCar,
};
