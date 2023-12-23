import React from "react";
import Temp from "./Temp";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Products Page</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          This is the products page
        </div>
        <div>
          <Temp />
        </div>
      </div>
    </>
  );
}
