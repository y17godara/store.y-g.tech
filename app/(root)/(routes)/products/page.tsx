"use client";

import axios from "axios";
import { cn } from "@/lib/utils";
import { Suspense, useState, useCallback, lazy, useEffect } from "react";
import { CiGrid41, CiCircleList, CiImageOn } from "react-icons/ci";

export const runtime = "edge";

const LazyViewList = lazy(() => import("@/components/view/viewList"));
const LazyViewGrid = lazy(() => import("@/components/view/viewGrid"));
const LazyViewFull = lazy(() => import("@/components/view/viewFull"));

type viewTypes = "list" | "grid" | "full";

export default function Page() {
  const [currentView, setCurrentView] = useState<viewTypes>("grid");
  const [products, setProducts] = useState<any[]>([
    {
      id: 1,
      name: "Product 1",
      uui: "uuid-1",
      price: 100,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur a",
      discount: 0,
      stock: 10,
      category: "Category 1",
    },
    {
      id: 1,
      name: "Product 1",
      uui: "uuid-1",
      price: 100,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur a",
      discount: 0,
      stock: 10,
      category: "Category 1",
    },
    {
      id: 1,
      name: "Product 1",
      uui: "uuid-1",
      price: 100,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur a",
      discount: 0,
      stock: 10,
      category: "Category 1",
    },
  ]);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get("/api/products");
      const data = response.data;

      // console.log(data); // debug
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleView = (view: viewTypes) => () => {
    // console.log(view); // debug
    setCurrentView(view);
  };

  return (
    <>
      <div className='divide-y-secondary flex w-full flex-col items-end justify-end gap-y-16 p-2 text-end'>
        <div
          className='flex flex-row items-center justify-end gap-x-0 rounded-lg border border-secondary p-0 text-end transition-colors'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <button
            onClick={handleView("grid")}
            className={cn(
              "border-secondary p-1 transition-colors",
              currentView === "grid" ? "border" : ""
            )}
          >
            <CiGrid41
              title={"Grid"}
              className={
                "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
              }
            />
          </button>
          <button
            onClick={handleView("list")}
            className={cn(
              "border-secondary p-1 transition-colors",
              currentView === "list" ? "border" : ""
            )}
          >
            <CiCircleList
              title={"List"}
              className={
                "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
              }
            />
          </button>
          <button
            onClick={handleView("full")}
            className={cn(
              "border-secondary p-1 transition-colors",
              currentView === "full" ? "border" : ""
            )}
          >
            <CiImageOn
              title={"Full"}
              className={
                "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
              }
            />
          </button>
        </div>
        <div
          className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Suspense>
            {products.length > 0 ? (
              <>
                {currentView === "grid" && <LazyViewGrid products={products} />}
                {currentView === "list" && <LazyViewList products={products} />}
                {currentView === "full" && <LazyViewFull products={products} />}
              </>
            ) : (
              <div className='flex h-full w-full flex-col items-center justify-center'>
                <p className='text-center text-2xl font-bold'>
                  No products found.
                </p>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}
