import { auth } from "auth";
import prisma from "@/lib/db";

export const GET = auth(async (req) => {
  // Check if user is authenticated
  // if (req.auth) {
  try {
    // Get all products
    const products = await prisma.product.findMany();

    if (!products) {
      return Response.json({ message: "No products found" }, { status: 404 });
    }

    const reqProducts = products.map((product) => {
      return {
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

    return Response.json({ products: reqProducts }, { status: 200 });
  } catch (error: any) {
    // If something went wrong
    return Response.json(
      { message: "Something went Wrong, Try again Later" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Disconnect from database
  }
  // If user is not authenticated
  // } else {
  //   return Response.json({ message: "Not authenticated" }, { status: 401 });
  // }
}) as any; // TODO: Fix `auth()` return type
// });
