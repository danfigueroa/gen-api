import { Document } from 'mongoose';

export interface ICategory {
  name: string;
};

export interface ICategoryDocument extends ICategory, Document {}

export interface ICategoryRepository {
  createCategory(categoryData: ICategory): Promise<ICategoryDocument>;
  findCategoryById(id: string): Promise<ICategoryDocument | null>;
  findCategoryByIdAndUpdate(id: string, categoryData: ICategory): Promise<ICategoryDocument | null>;
  findCategoryByIdAndDelete(id: string): Promise<void>;
};

export interface ICategoryService {
  createCategory(categoryData: ICategory): Promise<ICategoryDocument>;
  getCategory(id: string): Promise<ICategoryDocument | null>;
  updateCategory(id: string, categoryData: ICategory): Promise<ICategoryDocument | null>;
  deleteCategory(id: string): Promise<void>;
};
