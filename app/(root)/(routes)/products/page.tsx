"use client";

import axios from "axios";
import { cn } from "@/lib/utils";
import { Suspense, useState, useCallback, useEffect } from "react";
import { CiGrid41, CiCircleList, CiImageOn } from "react-icons/ci";
import { type Product } from "@/types/index";
import { ProductsDisplay } from "./components/productsDisplay";

type viewTypes = "list" | "grid" | "full";

export default function Page() {
  const [currentView, setCurrentView] = useState<viewTypes>("grid");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/products");
      const products = response.data?.products;

      // console.log("data: ", response); // debug
      setProducts(products);
    } catch (error) {
      // console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
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
        <Suspense>
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
        </Suspense>
        <Suspense>
          <div
            className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <Suspense fallback={<div>Loading...</div>}>
              {loading ? (
                <>
                  <div>Loading...</div>
                </>
              ) : (
                <ProductsDisplay
                  products={products}
                  currentView={currentView}
                />
              )}
            </Suspense>
          </div>
        </Suspense>
      </div>
    </>
  );
}
