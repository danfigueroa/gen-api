import { injectable } from 'tsyringe';
import { IProductRepository, IProductDocument } from '../interfaces/product.interface';
import ProductModel from '../models/product';
@injectable()
export class ProductRepository implements IProductRepository {

  async createProduct(productData: IProductDocument): Promise<IProductDocument> {
    const createdProduct = await ProductModel.create(productData);
    return createdProduct;
  }

  async findProductById(productId: string): Promise<IProductDocument | null> {
    const product = await ProductModel.findById(productId);
    return product;
  }

  async findProductByIdAndUpdate(
    productId: string,
    productData: Partial<IProductDocument>
  ): Promise<IProductDocument | null> {
    const updatedProduct = await ProductModel.findByIdAndUpdate(productId, productData, { new: true });
    return updatedProduct;
  }

  async findProductByIdAndDelete(productId: string): Promise<void> {
    await ProductModel.findByIdAndDelete(productId);
  }
}
