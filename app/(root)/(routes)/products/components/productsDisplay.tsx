import React from "react";
import { Suspense, lazy } from "react";
import { type Product } from "@/types/index";
const LazyViewList = lazy(() => import("@/components/view/viewList"));
const LazyViewGrid = lazy(() => import("@/components/view/viewGrid"));
const LazyViewFull = lazy(() => import("@/components/view/viewFull"));

export function ProductsDisplay({
  products,
  currentView,
}: {
  products: Product[];
  currentView: string;
}) {
  return (
    <Suspense>
      {products.length > 0 ? (
        <>
          {currentView === "grid" && <LazyViewGrid products={products} />}
          {currentView === "list" && <LazyViewList products={products} />}
          {currentView === "full" && <LazyViewFull products={products} />}
        </>
      ) : (
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <p className='text-center text-2xl font-bold'>No products found.</p>
        </div>
      )}
    </Suspense>
  );
}
