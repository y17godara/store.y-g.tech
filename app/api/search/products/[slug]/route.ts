import db from "@/lib/db";

// [id] is a dynamic route parameter
export async function GET(req: Request, res: Response): Promise<Response> {
  const productID = req.url.split("/")[6];
  console.log(productID);
  try {
    const user = await db.product.findFirst({
      include: {
        images: true,
      },
      where: {
        OR: [
          {
            id: productID,
          },
        ],
      },
    });

    return Response.json(
      {
        user,
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
