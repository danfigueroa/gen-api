import express, { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { CategoryController } from '../controllers/categoryController';

const categoryRouter: Router = express.Router();
const categoryController: CategoryController = container.resolve(CategoryController);

categoryRouter.post('/', async (req: Request, res: Response) => {
    await categoryController.createCategory(req, res);
});

categoryRouter.get('/:id', async (req: Request, res: Response) => {
    await categoryController.getCategoryById(req, res);
});

categoryRouter.put('/:id', async (req: Request, res: Response) => {
    await categoryController.updateCategory(req, res);
});

categoryRouter.delete('/:id', async (req: Request, res: Response) => {
    await categoryController.deleteCategory(req, res);
});

export default categoryRouter;
