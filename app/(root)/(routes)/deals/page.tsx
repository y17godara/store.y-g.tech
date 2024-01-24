import { Suspense } from "react";
import Deals from "./components/Deals";

export default async function page({ searchParams }: { searchParams: string }) {
  const { page = 1, limit = 8 }: any = searchParams;
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <h2 className='text-xl'>Deals upto {"50"}% off</h2>
          <div className='flex flex-col gap-16 md:gap-24 '>
            <h2 className='text-3xl font-bold text-white'>
              Deals upto {"50"}% off
            </h2>
            <div className='flex w-full animate-in flex-col gap-8'>
              <Suspense fallback={<div>Loading...</div>}>
                <Deals page={page} limit={limit} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
