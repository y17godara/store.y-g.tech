"use server";

import prisma from "@/lib/db";
import { Product } from "@/types";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany();

    if (!products) {
      return null;
    }
    // console.log("reqProducts : ", products);
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(productId: string) {
  // console.log("productId : ", productId);
  try {
    if (!productId) return null;

    const product: Product | any = await prisma.product.findUnique({
      where: {
        productId: productId,
      },
      include: {
        images: true,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
}
