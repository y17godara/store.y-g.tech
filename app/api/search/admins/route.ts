import db from "@/lib/db";

export async function GET(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const admins = await db.user.findMany({
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
          not: "USER",
        },
      },
    });

    return Response.json(
      {
        admins,
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
