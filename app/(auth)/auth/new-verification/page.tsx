import React from "react";
import { Metadata } from "next";
import VertifyCard from "@/components/auth/verify-card";

export const metadata: Metadata = {
  title: "Verify User",
};

export default async function Page() {
  return (
    <div className='flex h-full w-full items-center justify-center '>
      <VertifyCard />
    </div>
  );
}
