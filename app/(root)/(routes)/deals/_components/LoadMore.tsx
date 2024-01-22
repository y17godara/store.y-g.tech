"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Loading } from "@/components/ui";

const URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const MAX_LIMIT = 8;

async function fetchDeals(page: number) {
  const response = await fetch(
    URL + `/api/search/products/deals?page=${page}&limit=${MAX_LIMIT}`
  );
  const json = await response.json();
  console.log(json);
  return json;
}

function LoadMore() {
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView && isLoading) {
      // Add a delay for better user experience
      const delay = 500;

      const timeoutId = setTimeout(() => {
        fetchDeals(page).then((res) => {
          // Check if res is iterable
          if (res && typeof res[Symbol.iterator] === "function") {
            setData((prevData: any[]) => [...prevData, ...res]);
            setPage((prevPage) => prevPage + 1);
            console.log("Data fetched:", res);
          } else {
            console.error("Data fetched is not iterable:", res);
          }

          setIsLoading(false);
        });
      }, delay);

      return () => clearTimeout(timeoutId); // Cleanup on component unmount or if inView becomes false
    }
  }, [inView, isLoading, page]);

  return (
    <>
      <section className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item, index) => (
          <div key={item.id}>{item.id}</div>
        ))}
      </section>
      <section className='flex w-full items-center justify-center'>
        <div ref={ref}>
          {inView && isLoading && <Loading className='h-10 w-10 text-white' />}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
