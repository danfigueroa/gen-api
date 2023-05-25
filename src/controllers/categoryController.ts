import 'reflect-metadata';
import { Request, Response } from 'express';
import { injectable, inject } from 'tsyringe';
import { ICategoryService, ICategoryDocument } from '../interfaces/category.interface';
@injectable()
export class CategoryController {
  constructor(
    // @inject('CategoryService')
    private categoryService: ICategoryService
  ) {}

  getCategoryById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      const category = await this.categoryService.getCategory(id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  createCategory = async (req: Request, res: Response): Promise<Response> => {
    const categoryData: ICategoryDocument = req.body;
    try {
      const createdCategory = await this.categoryService.createCategory(categoryData);
      return res.status(201).json(createdCategory);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  updateCategory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const categoryData: ICategoryDocument = req.body;

        if (!categoryData) {
            return res.status(400).json({ error: 'Invalid data' });
        }

        const updatedCategory = await this.categoryService.updateCategory(id, categoryData as ICategoryDocument);

        if (updatedCategory) {
            res.json(updatedCategory);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.sendStatus(204)
    };

  deleteCategory = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      await this.categoryService.deleteCategory(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
