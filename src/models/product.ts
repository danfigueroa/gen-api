import { Schema, model, Document } from 'mongoose';
import CategoryModel from './category';

interface Product extends Document {
  name: string;
  price: number;
  category: typeof CategoryModel;
}

const ProductSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const ProductModel = model<Product>('Product', ProductSchema);

export default ProductModel;
