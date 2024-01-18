import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User History",
};

export default async function Page() {
  return (
    <>
      <Suspense>
        <div className='divide-y-secondary flex flex-col gap-16 md:gap-24 '>
          <div className='flex animate-in flex-col gap-8'>
            <h2 className='text-3xl font-bold text-primary'>View History</h2>
            <p className='text-lg text-secondary'>Last Viwed Products</p>
          </div>

          <div
            className='flex animate-in flex-col gap-8'
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {/* TODO */}
          </div>
        </div>
      </Suspense>
    </>
  );
}
