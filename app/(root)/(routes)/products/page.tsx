import { Suspense } from "react";
import Products from "./components/Products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page",
};

export default async function page({ searchParams }: { searchParams: string }) {
  const { page, limit = 8, view = "grid" }: any = searchParams;

  if (!page || page < 1) {
    redirect(`/products?page=1&limit=${limit}&view=${view}`);
  }

  return (
    <>
      <Suspense>
        <div className='divide-y-secondary flex w-full flex-col items-end justify-end gap-y-16 p-2 text-start'>
          <div className='w-full'>
            <div className='w-fulll flex flex-col items-center gap-4 text-start'>
              <h1 className='w-full text-3xl font-bold'>Products</h1>
            </div>
          </div>
          <div
            className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Suspense>
              <Products currentView={view} page={page} limit={limit} />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </>
  );
}
