import prisma from "@/lib/db";

export const getProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};
