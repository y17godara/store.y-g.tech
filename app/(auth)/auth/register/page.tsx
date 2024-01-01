import React from "react";
import { Metadata } from "next";
import RegisterCard from "@/components/auth/register-card";

export const metadata: Metadata = {
  title: "Register",
};

export default async function Page() {
  return (
    <div className='flex h-full w-full items-center justify-center '>
      <RegisterCard />
    </div>
  );
}
