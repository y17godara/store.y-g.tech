"use server";
import prisma from "@/lib/db";

export async function getFeaturedBanners() {
  try {
    const featuredBanners = await prisma.siteFeaturedProducts.findMany({});
    // console.log(featuredBanners); // debug
    return { data: featuredBanners, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503" };
  }
}
