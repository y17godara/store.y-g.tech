export { auth as middleware } from "auth";
import NextAuth from "next-auth";

export const config = { matcher: ["/user/:path*"] };
