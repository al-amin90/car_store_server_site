import express, { Request, Response } from 'express';
import carRouter from './modules/car/car.router';
import orderRouter from './modules/order/order.router';
const app = express();

//parser
app.use(express.json());

app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Running on Port .:}');
});

// =====> global error handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route is not found',
  });
});

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.log('err', err);

//   const statusCode = err.status || 500;

//   const errorResponse: any = {
//     message: err.message || 'Failed to Create Car!',
//     success: false,
//     error: err,
//   };

//   if (config.node_env === 'development') {
//     errorResponse.stack = err?.stack;
//   }

//   res.status(statusCode).json(errorResponse);
//   next();
// });

export default app;
