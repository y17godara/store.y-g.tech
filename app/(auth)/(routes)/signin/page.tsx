import React from "react";
import { SignIn, SignOut } from "@/components/ui/auth-components";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 overflow-y-hidden md:gap-24'>
        <div className='flex w-full flex-row items-center justify-center gap-4'>
          <SignIn
            className={
              "rounded-md bg-secondary px-4 py-2 text-sm hover:bg-tertiary"
            }
            provider='github'
          />
          <SignOut
            className={
              "rounded-md bg-secondary px-4 py-2 text-sm hover:bg-tertiary"
            }
          />
        </div>
      </div>
    </>
  );
}
