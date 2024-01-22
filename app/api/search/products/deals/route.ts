import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  response: NextResponse
): Promise<Response> {
  // console.log("GET /api/search/products/deals"); // debug
  // `/api/search/products/deals?limit=${MAX_LIMIT}&page=${page}`
  const reqUrl = request.nextUrl.searchParams;

  // const limit = reqUrl.get("limit");
  // const page = reqUrl.get("page");
  const { limit, page } = Object.fromEntries(reqUrl.entries());

  // console.info({
  //   limit,
  //   page,
  // }); // debug

  try {
    if (!limit || !page) {
      return NextResponse.error();
    }

    const deals = await db.siteDeals.findMany({
      include: {
        Product: true,
      },
      take: Number(limit) || 8,
      skip: (Number(page) - 1) * Number(limit) || 0,
    });

    return NextResponse.json({ deals });
  } catch (err: any) {
    console.error(err);
    return NextResponse.error();
  }
}
