"use server";

import prisma from "@/lib/db";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany();

    if (!products) {
      return null;
    }

    const reqProducts = products.map((product) => {
      return {
        id: product.id,
        productId: product.productId,
        name: product.name,
        description: product.description,
        price: product.price,
        ratings: product.ratings,
        discount: product.discount,
        image: product.image,
        category: product.category,
        company: product.company,
        addedBy: product.addedBy,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      };
    });
    // console.log("reqProducts : ", reqProducts);
    return reqProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(productId: string) {
  console.log("productId : ", productId);
  try {
    if (!productId) return null;

    const product = await prisma.product.findUnique({
      where: {
        productId: productId,
      },
    });

    if (!product) {
      return null;
    }

    const reqProduct = {
      id: product.id,
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
      ratings: product.ratings,
      discount: product.discount,
      image: product.image,
      category: product.category,
      company: product.company,
      addedBy: product.addedBy,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
    // console.log("reqProduct : ", reqProduct);
    return reqProduct;
  } catch (error) {
    console.log(error);
  }
}
