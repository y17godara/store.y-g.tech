import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const newlyAdded = await db.newlyAddedProducts.findMany({
      include: {
        Product: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(
      {
        newlyAdded,
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
