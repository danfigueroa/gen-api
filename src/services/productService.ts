import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import { IProductService, IProductRepository, IProductDocument } from '../interfaces/product.interface';
import ProductModel  from '../models/product';
import { ProductRepository } from '../repositories/productRepository';

@injectable()
export class ProductService implements IProductService {
  constructor(
    // @inject('ProductRepository')
    private productRepository: IProductRepository
    ) {}

  public async createProduct(productData: IProductDocument): Promise<IProductDocument> {
    const createdProduct = await this.productRepository.createProduct(productData);
    return createdProduct;
  }

  public async getProduct(productId: string): Promise<IProductDocument | null> {
    const product = await this.productRepository.findProductById(productId);
    return product;
  }

  public async updateProduct(productId: string, productData: Partial<IProductDocument>): Promise<IProductDocument | null> {
    const updatedProduct = await this.productRepository.findProductByIdAndUpdate(productId, productData as IProductDocument);
    return updatedProduct;
  }
  
  public async deleteProduct(productId: string): Promise<void> {
    await this.productRepository.findProductByIdAndDelete(productId);
  }
}
