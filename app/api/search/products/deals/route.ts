import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const deals = await db.siteDeals.findMany({
      include: {
        Product: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(
      {
        deals,
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
