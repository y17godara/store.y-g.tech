"use client";

import axios from "axios";
import { Suspense, useState, useCallback, useEffect } from "react";
import { type Product } from "@/types/index";
import { ProductsDisplay } from "./components/productsDisplay";
import { ChangeView } from "./components/changeView";

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
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view") as viewTypes;
    // console.log("view: ", view); // debug
    setCurrentView(view || "grid");

    // const filter = params.get("f");
    // console.log("filter: ", filter); // debug

    // // get multiple filters split by comma
    // const filters = filter?.split(",");
    // console.log("filters: ", filters); // debug
    getProducts();
  }, [getProducts]);

  const handleView = (view: viewTypes) => () => {
    // console.log(view); // debug
    setCurrentView(view);
    // add ?view=view to url
    const params = new URLSearchParams(window.location.search);
    params.set("view", view);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };

  return (
    <>
      <div className='divide-y-secondary flex w-full flex-col items-end justify-end gap-y-16 p-2 text-end'>
        <Suspense>
          <ChangeView
            // currentView={currentView}
            handleView={handleView}
          />
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
                <ProductsDisplay />
              )}
            </Suspense>
          </div>
        </Suspense>
      </div>
    </>
  );
}
