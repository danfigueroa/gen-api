import { Schema, model, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  percentage: number;
}

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

const CategoryModel = model<ICategory>('Category', CategorySchema);

export default CategoryModel;
