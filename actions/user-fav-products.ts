"use server";

import prisma from "@/lib/db";

export async function getUserFavorites(userId: string) {
  const favorites = await prisma.userFavorite.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      product: true,
    },
  });

  return favorites;
}
