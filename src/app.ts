import 'reflect-metadata';
import express from 'express';
import connectToDatabase from './database/connection';
import container from './config/container';
import { IProductService, IProductDocument } from './interfaces/product.interface';
import { ICategoryDocument, ICategoryService  } from './interfaces/category.interface';

const app = express();
const port = 3000;

app.use(express.json());

connectToDatabase()
  .then((db) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

const productService = container.resolve<IProductService>('ProductService');
const categoryService = container.resolve<ICategoryService>('CategoryService');

app.post('/products', async (req, res) => {
  try {
    const productData: IProductDocument = req.body;
    const createdProduct = await productService.createProduct(productData);

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await productService.getProduct(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get product' });
  }
});

app.put('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const productData: Partial<IProductDocument> = req.body;
    const updatedProduct = await productService.updateProduct(productId, productData as IProductDocument);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

app.delete('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

app.post('/categories', async (req, res) => {
  try {
    const categoryData: ICategoryDocument = req.body;
    const createdCategory = await categoryService.createCategory(categoryData);

    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
});

app.get('/categories/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await categoryService.getCategory(categoryId);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get category' });
  }
});

app.put('/categories/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryData: Partial<ICategoryDocument> = req.body;
    const updatedCategory = await categoryService.updateCategory(categoryId, categoryData as ICategoryDocument);
    if (updatedCategory) {
      res.json(updatedCategory);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
});

app.delete('/categories/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    await categoryService.deleteCategory(categoryId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
