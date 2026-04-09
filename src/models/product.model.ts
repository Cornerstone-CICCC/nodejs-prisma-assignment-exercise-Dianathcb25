import { prisma } from '../lib/prisma';
import { Product } from '../generated/prisma/browser';

//Get all
const fetchAll = async () => {
  return await prisma.product.findMany();
};

//Get by ID
const fetchOne = async (id: number) => {
  await prisma.product.findUnique({
    where: { id },
  });
};

//Add
const add = async (data: Omit<Product, 'id'>) => {
  return await prisma.product.create({ data });
};

//Edit
const edit = async (id: number, data: Partial<Product>) =>
  await prisma.product.update({
    where: { id },
    data,
  });

//Delete
const remove = async (id: number) =>
  await prisma.product.delete({
    where: { id },
  });

export default {
  fetchAll,
  fetchOne,
  add,
  edit,
  remove,
};
