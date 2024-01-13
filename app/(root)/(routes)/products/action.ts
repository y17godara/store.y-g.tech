"use server";

import prisma from "@/lib/db";
import { Product } from "@/types";

// {
//   id: "1",
//   productId: "8364256-9295-d1d837c09aea",
//   name: "NextJs 14 - Template",
//   description:
//     "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
//   price: 10,
//   ratings: 4,
//   discount: 30,
//   featuredImage: "https://i.imgur.com/OeuV5Lf.png",
//   images: [
//     {
//       id: "1",
//       imageUrl: "https://i.imgur.com/OeuV5Lf.png",
//       productId: "8364256-9295-d1d837c09aea",
//       createdAt: "2023-12-26T02:35:43.322Z",
//       updatedAt: "2023-12-26T02:39:29.277Z",
//     },
//   ],
//   category: "y17godara",
//   company: "y17godara",
//   addedBy: "y17godara",
//   createdAt: "2023-12-26T02:35:43.322Z",
//   updatedAt: "2023-12-26T02:39:29.277Z",
// },
// {
//   id: "2",
//   productId: "38cd8bfe-eec7-4ba7-9bec-",
//   name: "NextJs 14 - Template",
//   description:
//     "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
//   price: 10,
//   ratings: 5,
//   discount: 10,
//   featuredImage: "https://i.imgur.com/OeuV5Lf.png",
//   images: [
//     {
//       id: "1",
//       imageUrl: "https://i.imgur.com/OeuV5Lf.png",
//       productId: "8364256-9295-d1d837c09aea",
//       createdAt: "2023-12-26T02:35:43.322Z",
//       updatedAt: "2023-12-26T02:39:29.277Z",
//     },
//   ],
//   category: "unknown",
//   company: "y17godara",
//   addedBy: "unknown",
//   createdAt: "2023-12-26T05:04:38.321Z",
//   updatedAt: "2023-12-26T05:02:57.410Z",
// },

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

    const product = await prisma.product.findUnique({
      where: {
        productId: productId,
      },
    });

    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    console.log(error);
  }
}
