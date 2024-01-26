"use client";

import { useQuery } from "@tanstack/react-query";
import { Suspense, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Deals({ page, limit }: { page: any; limit: number }) {
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
  }, [page, limit, refetch]);

  const LoadingStatus = ({
    status,
    loading,
  }: {
    status: any;
    loading: boolean;
  }) => {
    if (status !== "pending" && !loading) return null;
    return (
      <div>
        <div className='relative z-50 flex h-full min-h-60 w-full flex-col items-center justify-center text-center'>
          <div className='h-2 w-28 animate-spin rounded-full border-b-2 border-[var(--brand)]'></div>
          <p className={cn("mt-2 text-sm font-semibold text-[var(--brand)]")}>
            {"Loading..."}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-8'>
      <LoadingStatus status={status} loading={isLoading} />

      {isSuccess && (
        <Suspense>
          <section className='grid h-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.res.map((deal: DealsProps, index: number) => (
              <Suspense key={deal.id}>
                <motion.div
                  key={deal.id}
                  initial={variants.hidden}
                  animate={variants.visible}
                  transition={{
                    delay: index * stagger,
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  className='relative h-64 w-full max-w-sm overflow-hidden rounded shadow-lg'
                >
                  <Link
                    href={`${deal.href}`}
                    className='relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-lg bg-gray-100'
                  >
                    <Image
                      src={deal.bannerURL}
                      alt={deal.id}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg'
                    />
                  </Link>
                  <div className='absolute flex flex-col gap-2'>
                    <p className='text-sm text-secondary'>
                      {deal.discount}% off
                    </p>
                  </div>
                </motion.div>
              </Suspense>
            ))}
          </section>
        </Suspense>
      )}
      <div className='item-center relative flex w-full flex-col justify-center gap-4 sm:flex-row sm:justify-start '>
        {/* show previous if page is larger than 1 */}

        <button
          className='cursor-pointer rounded bg-secondary p-2 text-white disabled:cursor-not-allowed disabled:opacity-60'
          onClick={() => {
            window.location.href = `/deals?page=${page - 1}&limit=${limit}`;
          }}
          disabled={page <= 1}
        >
          Previous
        </button>

        {/* Load more by navigating user to next page */}
        <button
          className='diabled:cursor-not-allowed cursor-pointer rounded bg-secondary p-2 text-white disabled:opacity-60'
          onClick={() => {
            const newPage = parseInt(page, 10) + 1;
            window.location.href = `/deals?page=${newPage}&limit=${limit}`;
          }}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
