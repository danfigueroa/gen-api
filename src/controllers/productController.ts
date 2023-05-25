import 'reflect-metadata';
import { Request, Response } from 'express';
import { injectable, inject, container } from 'tsyringe';
import { IProductService, IProduct, IProductDocument } from '../interfaces/product.interface';
@injectable()
export class ProductController {
  constructor(
    // @inject('ProductService') 
    private productService: IProductService
    ) {}

  getProductById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params; 
    try {
      const product = await this.productService.getProduct(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  createProduct = async (req: Request, res: Response): Promise<Response> => {
    const productData: IProduct = req.body;
    try {
      const createdProduct = await this.productService.createProduct(productData);
      return res.status(201).json(createdProduct);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, description, price, idCategory } = req.body;
  
      const productData: Partial<IProductDocument> = {};
  
      if (typeof name !== 'undefined') {
        productData.name = name;
      }
      if (typeof description !== 'undefined') {
        productData.description = description;
      }
      if (typeof price !== 'undefined') {
        productData.price = price;
      }
      if (typeof idCategory !== 'undefined') {
        productData.idCategory = idCategory;
      }
  
      if (typeof productData.name !== 'undefined' && productData.name.trim() === '') {
        throw new Error('Product name cannot be empty');
      }
  
      const updatedProduct = await this.productService.updateProduct(id, productData as IProductDocument);
  
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      await this.productService.deleteProduct(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
