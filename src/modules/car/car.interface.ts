import { Error } from 'mongoose';

export interface ICar {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: 'Sedan' | ' SUV' | 'Truck' | 'Coupe' | 'Convertible';
  description: string;
  quantity: number;
  inStock: boolean;
}

export interface AppError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
}
