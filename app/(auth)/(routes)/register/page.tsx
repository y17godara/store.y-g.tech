import { Link } from "@/components/ui";
import React from "react";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 overflow-y-hidden md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Register</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          This is the register page
        </div>
        <p>
          <Link href='/login' className='underline'>
            {" "}
            Login Now
          </Link>
        </p>
      </div>
    </>
  );
}
