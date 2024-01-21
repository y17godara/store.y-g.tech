import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newlyAdded = await db.newlyAddedProducts.findMany({
      include: {
        Product: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return Response.json(
      {
        newlyAdded,
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
