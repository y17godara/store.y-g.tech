import { auth } from "@/auth";
import prisma from "@/lib/db";

export const GET = auth((req) => {
  if (req.auth) {
    const userEmail = req.auth?.user?.email?.toString();

    const favorites = prisma.user.findMany({
      where: {
        email: userEmail,
      },
      include: {
        favorites: true,
      },
    });

    return Response.json({ data: favorites });
  }
  return Response.json({ message: "Not authenticated" }, { status: 401 });
}) as any; // TODO: Fix `auth()` return type
