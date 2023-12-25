import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import { PrismaClient } from "@prisma/client/edge";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const config = {
  debug: false,
  theme: {
    logo: "/assets/logo/logo.png",
  },
  pages: {
    signIn: "/login",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: undefined,
  },
  providers: [
    GitHub({
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          provider: profile.provider,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
