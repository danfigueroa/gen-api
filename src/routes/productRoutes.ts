import express, { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProductController } from '../controllers/productController';

const productRouter: Router = express.Router();
const productController: ProductController = container.resolve(ProductController);

productRouter.post('/', async (req: Request, res: Response) => {
  await productController.createProduct(req, res);
});

productRouter.get('/:id', async (req: Request, res: Response) => {
  await productController.getProductById(req, res);
});

productRouter.put('/:id', async (req: Request, res: Response) => {
  await productController.updateProduct(req, res);
});

productRouter.delete('/:id', async (req: Request, res: Response) => {
  await productController.deleteProduct(req, res);
});

export default productRouter;
