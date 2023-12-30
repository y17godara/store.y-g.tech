import { Suspense } from "react";
import { ProductsDisplay } from "./components/productsDisplay";
import { ChangeView } from "./components/changeView";
import { Metadata } from "next";
import { getProducts } from "./action";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page",
};

export default async function Page() {
  const products: any = await getProducts();

  return (
    <>
      <Suspense>
        <div className='divide-y-secondary flex w-full flex-col items-end justify-end gap-y-16 p-2 text-start'>
          <div className='w-full'>
            <div className='w-fulll flex flex-col items-center gap-4 text-start'>
              <h1 className='w-full text-3xl font-bold'>Products</h1>
            </div>
            <div className='flex justify-end'>
              <div className='w-fit'>
                <Suspense>
                  <ChangeView />
                </Suspense>
              </div>
            </div>
          </div>
          <div
            className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Suspense>
              {products && <ProductsDisplay products={products} />}
            </Suspense>
          </div>
        </div>
      </Suspense>
    </>
  );
}
