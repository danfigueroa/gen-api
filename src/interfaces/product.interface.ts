import { Document } from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  idCategory: string;
}

export interface IProductDocument extends IProduct, Document {}

export interface IProductRepository {
  createProduct(productData: IProduct): Promise<IProductDocument>;
  findProductById(id: string): Promise<IProductDocument | null>;
  findProductByIdAndUpdate(id: string, productData: IProduct): Promise<IProductDocument | null>;
  findProductByIdAndDelete(id: string): Promise<void>;
}

export interface IProductService {
  createProduct(productData: IProduct): Promise<IProductDocument>;
  getProduct(id: string): Promise<IProductDocument | null>;
  updateProduct(id: string, productData: IProduct): Promise<IProductDocument | null>;
  deleteProduct(id: string): Promise<void>;
}
