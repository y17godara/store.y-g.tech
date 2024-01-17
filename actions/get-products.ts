"use server";

import prisma from "@/lib/db";

export async function getDeals() {
  try {
    const deals = await prisma.siteDeals.findMany({});
    return { data: deals, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503 to Get Latest Deals" };
  }
}

export async function newlyAdded() {
  try {
    const newlyAdded = await prisma.newlyAddedProducts.findMany({});
    return { data: newlyAdded, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503 to Get Newly Products" };
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export async function userFavProducts(id: string) {
  try {
    // check if user exists
    const user = await getUserById(id);

    if (!user) {
      return { error: "User not found" };
    }

    // get user fav products
    const favProducts = await prisma.userFavorite.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });

    return { data: favProducts, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503 to Get User Fav Products" };
  }
}

export async function userCartProducts(id: string) {
  try {
    // check if user exists
    const user = await getUserById(id);

    if (!user) {
      return { error: "User not found" };
    }

    const cartProducts = await prisma.cartProduct.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });

    return { data: cartProducts, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503 to Get User Cart Products" };
  }
}
