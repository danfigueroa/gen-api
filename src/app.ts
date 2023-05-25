import 'reflect-metadata';
import express from 'express';
import connectToDatabase from './database/connection';
import container from './config/container';
import { IProductService, IProductDocument } from './interfaces/product.interface';

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
