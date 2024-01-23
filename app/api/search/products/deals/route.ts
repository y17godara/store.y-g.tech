import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const options = req.nextUrl.searchParams;

  const limit = options.get("limit");
  const page = options.get("page");

  try {
    if (!limit || !page) {
      return NextResponse.json(
        { res: "Missing limit or page", success: false },
        { status: 400 }
      );
    }

    const deals = await prisma.siteDeals.findMany({
      include: {
        Product: true,
      },
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ res: deals, success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { res: error.message, success: false },
      { status: 500 }
    );
  }
}
