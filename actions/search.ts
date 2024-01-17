import { cache } from "react";
import prisma from "@/lib/db";

export const getSearch = cache(async (query?: string) => {
  try {
    let products = await prisma.product.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

    // console.log(products);
    return { data: products };
  } catch (error) {
    console.log(error);
    return { data: null };
  }
});
