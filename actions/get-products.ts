"use server";
import { update } from "@/auth";
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

export async function userFavProducts(user: any) {
  const id = user.id.toString();
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
