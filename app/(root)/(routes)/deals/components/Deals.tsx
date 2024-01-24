"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DealsProps {
  Product?: any;
  productId?: any;
  id: string;
  href: string;
  bannerURL: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
}

export default function Deals({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  const { data, status, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["deals"],
    queryFn: () =>
      fetch(`/api/search/products/deals?page=${page}&limit=${limit}`).then(
        (res) => res.json()
      ),
  });

  // refetch data when page or limit changes

  useEffect(() => {
    refetch();
    // console.log("refetch", page, limit);
  }, [page, limit]);

  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  return (
    <div>
      <p
        className={cn(
          "text-bold text-sm uppercase",
          status === "success" ? "text-green-500" : "text-red-500"
        )}
      >
        {status}
      </p>
      {isSuccess && (
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.res.map((deal: DealsProps, index: number) => (
            <motion.div
              key={deal.id}
              // render animation slowly
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 * index }}
              className='flex animate-in flex-col gap-4'
            >
              <div className='relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
                <Image
                  src={deal.bannerURL}
                  alt={deal.id}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-secondary'>{deal.discount}% off</p>
              </div>
            </motion.div>
          ))}
        </section>
      )}
      <div className='item-center flex w-full flex-col justify-center gap-4 sm:flex-row sm:justify-start '>
        {/* show previous if page is larger than 1 */}
        {page > 1 && (
          <button
            className='rounded bg-blue-500 p-2 text-white'
            onClick={() => {
              window.location.href = `/deals?page=${page - 1}&limit=${limit}`;
            }}
          >
            Previous
          </button>
        )}
        {/* Load more by navigating user to next page */}
        <button
          className='rounded bg-blue-500 p-2 text-white'
          onClick={() => {
            const newPage = (page as number) + 1;
            window.location.href = `/deals?page=${newPage}&limit=${limit}`;
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
