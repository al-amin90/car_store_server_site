import { Request, Response } from 'express';
import orderService from './order.service';

const createOrder = async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await orderService.createOrderInDB(payload);
    res.status(200).json({
      message: 'Create Order successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Create Order!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrderFromDB();
    res.status(200).json({
      message: 'Orders retrieved successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Get all Order!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const getOrderCar = async (req: Request, res: Response) => {
  const { carId } = req.params;

  try {
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

// const updateCar = async (req: Request, res: Response) => {
//   const { carId } = req.params;
//   const payload = req.body;

//   try {
//     const result = await carService.updateCarInDB(carId, payload);
//     res.status(200).json({
//       message: 'Car updated successfully!',
//       success: true,
//       result,
//     });
//   } catch (error: any) {
//     console.log('error', error);

//     res.status(400).json({
//       message: 'Failed to update Car!',
//       success: false,
//       error: error,
//       stack: error?.stack,
//     });
//   }
// };

// const deleteCar = async (req: Request, res: Response) => {
//   const { carId } = req.params;

//   try {
//     const result = await carService.deleteCarFromDB(carId);
//     res.status(200).json({
//       message: 'Car deleted successfully!',
//       success: true,
//       result,
//     });
//   } catch (error: any) {
//     console.log('error', error);

//     res.status(400).json({
//       message: 'Failed to Delete Car!',
//       success: false,
//       error: error,
//       stack: error?.stack,
//     });
//   }
// };

export default { createOrder, getOrder };
