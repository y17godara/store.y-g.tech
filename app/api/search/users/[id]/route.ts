import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// [id] is a dynamic route parameter
export async function GET(req: Request, res: Response) {
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

    return NextResponse.json(
      {
        user,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.error();
  }
}
