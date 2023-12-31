"use server";
import React from "react";
import { SignIn, SignOut } from "@/components/ui/auth-components";
import { auth } from "auth";
import Link from "next/link";

export async function SignInButton() {
  const session: any = await auth();
  return (
    <div>
      {/* is session */}
      {session ? (
        <>
          <SignOut
            className={
              "rounded-md bg-secondary px-4 py-2 text-sm hover:bg-tertiary"
            }
          />
        </>
      ) : (
        <>
          <Link
            href={`http://localhost:3000/api/auth/signin`}
            className={
              "rounded-md bg-secondary px-4 py-2 text-sm hover:bg-tertiary"
            }
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
