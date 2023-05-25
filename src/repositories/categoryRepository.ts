import { injectable } from 'tsyringe';
import { ICategoryRepository, ICategoryDocument } from '../interfaces/category.interface';
import CategoryModel from '../models/category';
@injectable()
export class CategoryRepository implements ICategoryRepository {

  async createCategory(categoryData: ICategoryDocument): Promise<ICategoryDocument> {
    const createdCategory = await CategoryModel.create(categoryData);
    return createdCategory;
  }

  async findCategoryById(categoryId: string): Promise<ICategoryDocument | null> {
    const category = await CategoryModel.findById(categoryId);
    return category;
  }

  async findCategoryByIdAndUpdate(
    categoryId: string,
    categoryData: Partial<ICategoryDocument>
  ): Promise<ICategoryDocument | null> {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, categoryData, { new: true });
    return updatedCategory;
  }

  async findCategoryByIdAndDelete(categoryId: string): Promise<void> {
    await CategoryModel.findByIdAndDelete(categoryId);
  }
}
