import 'reflect-metadata';
import { ICategoryService } from "../interfaces/category.interface";
import { IProduct, IProductService } from "../interfaces/product.interface";
  class CalculateParcelService {
    constructor(
      private categoryService: ICategoryService,
      private productService: IProductService
    ) {}
  
    calculateInterestRate(categoryName: string): number {
        switch (categoryName.toLowerCase()) {
          case 'informatica':
            return 5;
          case 'automotivo':
            return 2.5;
          case 'moveis':
            return 1;
          default:
            throw new Error('Invalid category');
        }
      }
    
    async calculateParcel(productId: string, numInstallments: number): Promise<number> {
        const product = await this.productService.getProduct(productId);
    
        if (!product) {
          throw new Error('Product not found');
        }
    
        const category = await this.categoryService.getCategory(product.idCategory);
    
        if (!category) {
          throw new Error('Category not found');
        }
    
        const interestRate = this.calculateInterestRate(category.name);
        const pv = product.price;
        const i = interestRate / 100 / 12;
        const n = numInstallments;
    
        const monthlyPayment = pv * i / (1 - Math.pow(1 + i, -n));
        return monthlyPayment;
      }
    }
    
    export default CalculateParcelService;