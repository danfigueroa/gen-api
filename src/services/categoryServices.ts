/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API para gerenciar categorias de produtos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - percentage
 *       properties:
 *         name:
 *           type: string
 *           description: Nome da categoria
 *         percentage:
 *           type: number
 *           description: Porcentagem de juros da categoria
 *       example:
 *         name: Informática
 *         percentage: 5
 */

import { Router, Request, Response } from 'express';
import Category, { ICategory } from '../models/category';
import Joi from 'joi';

const router: Router = Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Retorna todas as categorias
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/categories', async (req: Request, res: Response) => {
  try {
    const categories: ICategory[] = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Dados inválidos
 */
router.post('/categories', async (req: Request, res: Response) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      percentage: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, percentage } = req.body;
    const category: ICategory = new Category({ name, percentage });
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
