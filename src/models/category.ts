import { Schema, model, Document, Types } from 'mongoose';
import { ICategory, ICategoryDocument } from '../interfaces/category.interface';

const CategorySchema = new Schema<ICategoryDocument>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const CategoryModel = model<ICategoryDocument>('Category', CategorySchema);

export default CategoryModel;
