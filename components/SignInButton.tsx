"use server";
import React from "react";
import { SignIn, SignOut } from "@/components/ui/auth-components";
import { auth } from "auth";
import Link from "next/link";
import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "@/routes";

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
            href={DEFAULT_UNAUTHENTICATED_REDIRECT}
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
