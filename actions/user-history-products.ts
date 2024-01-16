"use server";

import prisma from "@/lib/db";

export async function getUserHistory(userId: string) {
  const historyProducts = await prisma.historyProduct.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      product: true,
    },
  });

  return historyProducts;
}
