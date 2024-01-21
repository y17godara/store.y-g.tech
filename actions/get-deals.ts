"use server";
import prisma from "@/lib/db";

export async function getSiteDeals() {
  try {
    const siteDeals = await prisma.siteDeals.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        Product: true,
      },
    });
    return { data: siteDeals, success: "Success" };
  } catch (error) {
    console.log(error);
    return { error: "Error 503" };
  }
}
