import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const users = await db.user.findMany({
      include: {
        accounts: true,
        cartProducts: true,
        favorites: true,
        historyProducts: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: {
          not: "ADMIN",
        },
      },
    });

    return Response.json(
      {
        users,
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
