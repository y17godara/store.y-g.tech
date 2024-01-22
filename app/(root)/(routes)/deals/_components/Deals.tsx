"use client";

import { useState, useEffect } from "react";
import LoadMore from "./LoadMore";
import DealCard, { DealsProps } from "./DealCard";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Deals() {
  return (
    <QueryClientProvider client={queryClient}>
      <Deal />
    </QueryClientProvider>
  );
}

function Deal() {
  const URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const MAX_LIMIT = 8;
  const page = 1;

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `http://localhost:3000/api/search/products/deals?page=1&limit=16`
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const deals: any[] = data.deals;

  return (
    <>
      <section className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {deals &&
          deals.map((item: DealsProps, index: number) => (
            <DealCard key={item.id} deal={item} index={index} />
          ))}
      </section>
      {/* <LoadMore /> */}
    </>
  );
}
