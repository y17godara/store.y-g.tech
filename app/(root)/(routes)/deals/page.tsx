import React from "react";

export const revalidate = 3600;

export const runtime = "nodejs";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <h2 className='text-xl'>Deals upto {"50"}% off</h2>
        </div>
      </div>
    </>
  );
}
