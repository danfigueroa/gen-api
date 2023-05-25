import { container } from 'tsyringe';
import { ProductService } from '../services/productService';
import { IProductService, IProductRepository } from '../interfaces/product.interface';
import { ProductRepository } from '../repositories/productRepository';
import { CategoryService } from '../services/categoryService';
import { ICategoryService, ICategoryRepository } from '../interfaces/category.interface';
import { CategoryRepository } from '../repositories/categoryRepository';

container.register<IProductService>('ProductService', {
  useClass: ProductService,
});

container.register<IProductRepository>('ProductRepository', {
  useClass: ProductRepository,
});

container.register<ICategoryService>('CategoryService', { useClass: CategoryService });

container.register<ICategoryRepository>('CategoryRepository', { useClass: CategoryRepository,    
});

export default container;
