import React from "react";
import { Metadata } from "next";
import LoginCard from "@/components/auth/login-card";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <LoginCard />
    </div>
  );
}
