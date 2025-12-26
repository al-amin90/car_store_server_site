import { model, Schema } from 'mongoose';

const carSchema = new Schema(
  {
    brand: {
      type: String,
      require: [true, 'brand is required'],
      trim: true,
    },
    model: {
      type: String,
      require: [true, 'model is required'],
      trim: true,
    },
    year: {
      type: Number,
      require: [true, 'year is required'],
    },
    price: {
      type: Number,
      require: [true, 'price is required'],
    },
    category: {
      type: String,
      enum: ['Sedan', ' SUV', 'Truck', 'Coupe', 'Convertible'],
      require: [true, 'category is required'],
    },
    description: {
      type: String,
      require: [true, 'description is required'],
    },
    quantity: {
      type: Number,
      require: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      require: [true, 'inStock is required'],
    },
  },
  {
    timestamps: true,
  },
);

const carModal = model('Car', carSchema);

export default carModal;
