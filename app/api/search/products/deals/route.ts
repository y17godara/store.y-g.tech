import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const deals = await db.siteDeals.findMany({
      include: {
        Product: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return Response.json(
      {
        deals,
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
