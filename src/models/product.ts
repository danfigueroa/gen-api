import { Schema, model, Document, Types } from 'mongoose';
import { IProductDocument, IProduct } from '../interfaces/product.interface';

const productSchema = new Schema<IProductDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // TODO importar o idCategory do category
    idCategory: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductModel = model<IProductDocument>('Product', productSchema);

export default ProductModel;