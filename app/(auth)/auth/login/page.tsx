import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <p>Hello</p>
      <Link href='/auth/register'>Register</Link>
    </div>
  );
}
