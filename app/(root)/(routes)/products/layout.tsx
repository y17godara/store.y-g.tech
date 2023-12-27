import React, { Suspense } from "react";

export default async function page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <div className='flex flex-col gap-16 overflow-y-hidden md:gap-24'>
          {/* <div
            className='order-first w-full flex-none animate-in md:max-w-[125px]'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Collections
          </div> */}
          <div
            className='order-last min-h-screen w-full animate-in md:order-none'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {children}
          </div>
          {/* <div
            className='order-none flex-none animate-in md:order-last md:w-[125px]'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Filters
          </div> */}
        </div>
      </Suspense>
    </>
  );
}
