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
      message: error.message || 'Failed to Create Order!',
      success: false,
      error,
      stack: error?.stack,
    });
  }
};

const getRevenueOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrderFromDB();
    res.status(200).json({
      message: 'Revenue calculated successfully!',
      success: true,
      result,
    });
  } catch (error: any) {
    console.log('error', error);

    res.status(400).json({
      message: 'Failed to Get all calculated Revenue!',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

export default { createOrder, getRevenueOrder };
