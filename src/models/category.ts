import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  percentage: number;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  percentage: { type: Number, required: true },
});

export default mongoose.model<ICategory>('Category', CategorySchema);
