import db from "@/lib/db";

// [id] is a dynamic route parameter
export async function GET(req: Request, res: Response): Promise<Response> {
  const userIdOrEmail = req.url.split("/")[6];
  try {
    const user = await db.user.findFirst({
      include: {
        accounts: true,
        cartProducts: true,
        favorites: true,
        historyProducts: true,
      },
      where: {
        OR: [
          {
            id: userIdOrEmail,
          },
          {
            email: userIdOrEmail,
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
