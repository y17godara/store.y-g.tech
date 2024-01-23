import { NextRequest, NextResponse, NextMiddleware } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, res: NextResponse) {
  // const param = req.nextUrl;

  // console.log("param", param);

  return NextResponse.json(
    {
      message: "Hello from /api/product/[id]",
      // param,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "s-maxage=1, stale-while-revalidate",
      },
    }
  );
}
