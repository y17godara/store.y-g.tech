import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const featured = await db.siteFeaturedProducts.findMany({
      include: {
        product: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return Response.json(
      {
        featured,
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
