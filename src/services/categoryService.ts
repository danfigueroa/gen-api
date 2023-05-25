import { injectable, inject } from 'tsyringe';
import { ICategoryService, ICategoryRepository, ICategoryDocument } from '../interfaces/category.interface';

@injectable()
export class CategoryService implements ICategoryService {
  constructor(
    // @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  public async createCategory(categoryData: ICategoryDocument): Promise<ICategoryDocument> {
    const createdCategory = await this.categoryRepository.createCategory(categoryData);
    return createdCategory;
  }

  public async getCategory(categoryId: string): Promise<ICategoryDocument | null> {
    const category = await this.categoryRepository.findCategoryById(categoryId);
    return category;
  }

  public async updateCategory(categoryId: string, categoryData: Partial<ICategoryDocument>): Promise<ICategoryDocument | null> {
    const updatedCategory = await this.categoryRepository.findCategoryByIdAndUpdate(categoryId, categoryData as ICategoryDocument);
    return updatedCategory;
  }

  public async deleteCategory(categoryId: string): Promise<void> {
    await this.categoryRepository.findCategoryByIdAndDelete(categoryId);
  }
}
