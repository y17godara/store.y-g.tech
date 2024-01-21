import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
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

    return NextResponse.json(
      {
        admins,
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
