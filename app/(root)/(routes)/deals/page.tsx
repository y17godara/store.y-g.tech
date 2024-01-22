import { Suspense } from "react";
import Deals from "./_components/Deals";

export const revalidate = 3600;
export const runtime = "nodejs";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24 '>
        <h2 className='text-3xl font-bold text-white'>
          Deals upto {"50"}% off
        </h2>
        <div className='flex w-full animate-in flex-col gap-8'>
          <Suspense fallback={<div>Loading...</div>}>
            <Deals />
          </Suspense>
        </div>
      </div>
    </>
  );
}
