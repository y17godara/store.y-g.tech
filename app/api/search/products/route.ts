import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const products = await db.product.findMany({
      include: {
        images: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return Response.json(
      {
        products,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.error(err);
    return Response.error();
  }
}
