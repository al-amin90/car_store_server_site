import { model, Schema } from 'mongoose';
import { ICar } from './car.interface';

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: [true, 'brand is required'],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'model is required'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'year is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    category: {
      type: String,
      enum: ['Sedan', ' SUV', 'Truck', 'Coupe', 'Convertible'],
      required: [true, 'category is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock is required'],
    },
  },
  {
    timestamps: true,
  },
);

const carModal = model<ICar>('Car', carSchema);

export default carModal;
