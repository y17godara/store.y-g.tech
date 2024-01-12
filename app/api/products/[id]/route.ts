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

    return Response.json({ product: product }, { status: 200 });
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
