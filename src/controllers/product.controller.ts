import { Request, Response } from 'express';
import productModel from '../models/product.model';

//Get all Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await productModel.fetchAll();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//Get product by ID
const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await productModel.fetchOne(Number(id));

    if (!product) {
      res.status(404).json({ message: 'Cannot find product.' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//Add Product
const addProduct = async (req: Request, res: Response) => {
  const { productName, price } = req.body;

  try {
    const newProduct = await productModel.add({
      productName,
      price,
    });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//Update product
const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { productName, price } = req.body;
  try {
    const updatedProduct = await productModel.edit(Number(id), {
      productName,
      price,
    });
    if (!updatedProduct) {
      res.status(404).json({ message: 'Unable to find product' });
      return;
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//Delete Product
const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedProduct = await productModel.remove(Number(id));
    if (!deletedProduct) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.status(200).json(deletedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
};
