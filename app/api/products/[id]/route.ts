import prisma from "@/lib/db";

export const GET = async (req: any) => {
  try {
    // Get Requested Product Id
    const reqId = req.url.split("/")[5];

    // Search Requested Product
    const product = await prisma.product.findUnique({
      where: {
        productId: reqId,
      },
    });

    if (!product) {
      // If product not found
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    // If product found
    const reqProduct = {
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
    return Response.json({ product: reqProduct }, { status: 200 });
  } catch (error: any) {
    // If something went wrong
    return Response.json(
      { message: "Something went Wrong, Try again Later" },
      { status: 500 }
    );
  } finally {
    // Disconnect from database
    await prisma.$disconnect();
  }
};
