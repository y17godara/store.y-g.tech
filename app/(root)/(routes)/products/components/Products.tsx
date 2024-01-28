"use client";

import { useQuery } from "@tanstack/react-query";
import { Suspense, use, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CiGrid41, CiCircleList, CiImageOn } from "react-icons/ci";
import { type Product } from "@/types/index";

interface ProductsProps {
  Product?: Product;
  productId?: string;
  id: string;
  href: string;
  featuredImage: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
}

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Products({
  page,
  limit,
  currentView,
}: {
  page: any;
  limit: number;
  currentView: "grid" | "list" | "full";
}) {
  const { data, status, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`/api/search/products?page=${page}&limit=${limit}`).then((res) =>
        res.json()
      ),
  });

  // refetch data when page or limit changes
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  // useEffect(() => {
  // if (!data.res) return;
  //   if (isSuccess) {
  //     console.log(data);
  //   }
  // }, [data]);

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
    <>
      <div className='flex w-fit items-center justify-end'>
        <div
          className='flex flex-row items-center justify-end gap-x-0 rounded-lg border border-secondary p-0 text-end transition-colors'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <button
            onClick={() => {
              window.location.href = `/products?page=${
                page - 1
              }&limit=${limit}&view=grid`;
            }}
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
            onClick={() => {
              window.location.href = `/products?page=${
                page - 1
              }&limit=${limit}&view=list`;
            }}
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
            onClick={() => {
              window.location.href = `/products?page=${
                page - 1
              }&limit=${limit}&view=full`;
            }}
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
      </div>
      <div className='relative flex w-full flex-col items-center justify-center gap-8 '>
        <LoadingStatus status={status} loading={isLoading} />

        {isSuccess && (
          <Suspense>
            {data.res.length > 0 ? (
              <section className='[550px]:grid-cols-2 grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {data.res.map((item: Product, index: number) => (
                  <Suspense key={item.id}>
                    <ProductCard item={item} index={index} />
                  </Suspense>
                ))}
              </section>
            ) : (
              <>
                <section className='[550px]:grid-cols-2 grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-2xl font-bold'>No products found</h1>
                    <p className='text-sm text-gray-500'>
                      {"Please try again later"}
                    </p>
                  </div>
                </section>
              </>
            )}
          </Suspense>
        )}
        <div className='item-center relative flex w-full flex-col justify-center gap-4 sm:flex-row sm:justify-start '>
          {/* show previous if page is larger than 1 */}

          <button
            className='cursor-pointer rounded bg-secondary p-2 text-white disabled:cursor-not-allowed disabled:opacity-60'
            onClick={() => {
              window.location.href = `/products?page=${
                page - 1
              }&limit=${limit}&view=${currentView}`;
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
              window.location.href = `/products?page=${newPage}&limit=${limit}&view=${currentView}`;
            }}
            disabled={data?.res?.length > 0 ? false : true}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  );
}

import FavProduct from "@/components/view/components/favProduct";

const ProductCard = ({ item, index }: { item: Product; index: number }) => {
  const productId = item.productId;

  return (
    <>
      <motion.div
        key={item.id}
        initial={variants.hidden}
        animate={variants.visible}
        transition={{
          delay: index * stagger,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className='relative h-80 w-full overflow-hidden rounded shadow-sm dark:shadow-lg'
      >
        <Link
          href={`/products/${item.productId}`}
          className='relative flex h-60 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100'
        >
          <Image
            src={item.featuredImage}
            alt={`${item.name}`}
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </Link>
        <div className='absolute mt-2 flex w-full flex-col'>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-primary'>{item.name}</p>
            <div>
              <FavProduct productId={productId} />
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className='flex flex-row gap-2'>
              <p className='text-lg font-bold text-primary'>${item.price}</p>
              <p className='text-sm text-secondary line-through'>
                ${Math.round(item.price / (1 - item.discount / 100))}
              </p>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='text-xs text-gray-500'>{"by"}</p>
              <p className='text-xs text-gray-500'>{item.company}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
