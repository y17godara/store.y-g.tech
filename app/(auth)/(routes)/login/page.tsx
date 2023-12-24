import { Link } from "@/components/ui";
import React from "react";
import { auth } from "auth";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 overflow-y-hidden md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Login</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          This is the login page
        </div>
        <p>
          <Link href='/register' className='underline'>
            {" "}
            Register here
          </Link>
        </p>
      </div>
    </>
  );
}
