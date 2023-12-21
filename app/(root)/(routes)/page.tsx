import React from "react";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Home Page</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          This is the home page
        </div>
      </div>
    </>
  );
}
