import { Suspense } from "react";
import Deals from "./components/Deals";

export default async function page({ searchParams }: { searchParams: string }) {
  const { page = 1, limit = 8 }: any = searchParams;
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-6'>
          <h2 className='text-xl'>Deals</h2>
          <h2 className='text-3xl font-bold text-white'>upto {"50"}% off</h2>
          <div
            className='flex animate-in flex-col gap-16 md:gap-24 '
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Deals page={page as number} limit={limit as number} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
