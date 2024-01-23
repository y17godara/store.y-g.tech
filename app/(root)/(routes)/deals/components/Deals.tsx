"use client";

import { useState, useEffect } from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function Deals() {
  return (
    <QueryClientProvider client={queryClient}>
      <Deal />
    </QueryClientProvider>
  );
}

function Deal() {

    const [dealsGot, setDealsGot] = useState<any>([]);

    const MAX_LIMIT = 8;
    const page = 1;
  
    const { isPending, error, data, status, isFetched } = useQuery({
      queryKey: ["dealsData"],
      queryFn: () =>
        fetch(
          `/api/search/products/deals?page=${page}&limit=${MAX_LIMIT}`
        ).then((res) => res.json()),
    });
  
    useEffect(() => {

        if(!data || !data.success) return console.log("No deals found");

        if (!data.success) {
          console.log("No deals found");
        } 
          console.log(data);
          setDealsGot(data.res);
          console.log("useState", dealsGot); // This will not log the updated state immediately
        
      }, [data]);

    if (isPending) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  

    return (
      <>
        <section className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            Deals
            {dealsGot.map((deal: any) => (
        <div key={deal.id}>
          {/* Render individual deal information */}
          {deal.id}
        </div>
      ))}
        </section>
        {/* <LoadMore /> */}
      </>
    );
  }

export default Deals;