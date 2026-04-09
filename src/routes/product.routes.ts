import { Router } from 'express';
import productController from '../controllers/product.controller';
import { Resolver } from 'node:dns';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.updateProductById);
productRouter.delete('/:id', productController.deleteProductById);

export default productRouter;
