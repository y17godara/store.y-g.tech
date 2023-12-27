"use client";
import React, { useState, useEffect } from "react";
import { type Product } from "@/types/index";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

export function List({
  id,
  productId,
  name,
  description,
  price,
  ratings,
  discount,
  image,
  category,
  company,
  addedBy,
  createdAt,
  updatedAt,
}: Product): JSX.Element {
  return (
    <>
      <li className='border-tertiary flex min-h-32 flex-row gap-4 rounded-md border px-2 py-4'>
        <div className='relative h-48 w-48 overflow-hidden rounded-md'>
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className={cn(`rounded-md
                transition-all duration-300 hover:scale-105
              `)}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className='flex h-full w-full flex-1 gap-x-4 pt-2 text-start text-xs'>
          <div>
            <button
              title='Favorite'
              className={"mt-1 hover:text-red-700 focus:text-red-700"}
            >
              <FaHeart size={18} />
            </button>
          </div>
          <div className='flex flex-col gap-2'>
            <div>
              <p className='line-clamp-1 text-lg font-bold'>{name}</p>
              {company === "unknown" ? null : (
                <p className='line-clamp-1 text-sm underline underline-offset-2'>
                  {company}
                </p>
              )}
            </div>
            <p className='line-clamp-3 text-base'>{description}</p>

            <div className='flex flex-row gap-2'>
              <p className='text-lg font-bold text-primary'>${price}</p>
              <p className='text-sm text-gray-400 line-through'>
                ${price + discount}
              </p>

              <p className='text-sm text-gray-400'>{discount}% off</p>
            </div>

            <div className='flex flex-row gap-2'>
              <button className='text-sm text-gray-400 underline'>
                Add to cart
              </button>
              <button className='text-sm text-gray-400 underline'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

function ViewList({ products }: { products: Product[] }): JSX.Element {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  if (!page) redirect(`?page=1`);

  // current page min 1 and max size of products
  // Parse the page value and ensure it's a positive integer
  const parsedPage = Math.max(1, parseInt(page) || 1);

  // Redirect to the first page if the parsed page is not a positive integer
  if (parsedPage !== parseInt(page) || parsedPage < 1) {
    redirect(`?page=1`);
    return <></>; // Return an empty fragment to prevent rendering while redirecting
  }

  // // Redirect to the last page if the parsed page is greater than the number of pages
  if (parsedPage > products.length) {
    redirect(`?page=${products.length}`);
    return <></>; // Return an empty fragment to prevent rendering while redirecting
  }

  const currentPage: number = parsedPage;

  const productsPerPage = 2;

  const endIndex = currentPage * productsPerPage;

  const currentProducts = products.slice(
    currentPage * productsPerPage - productsPerPage,
    endIndex
  );

  return (
    <>
      <ul className='animate-list flex w-full flex-col gap-4'>
        {currentProducts.map((product) => (
          <List key={product.id} {...product} />
        ))}
      </ul>

      {/* Pagination controls */}
      <div>
        <div className='flex flex-row items-center gap-2'>
          {currentPage > 1 ? (
            <Link
              className='bg-primary px-2 py-1 text-primary underline-offset-4 hover:underline'
              href={`?page=${currentPage - 1}`}
            >
              Previous
            </Link>
          ) : null}
          <span className='bg-tertnary border border-secondary px-2'>
            {currentPage}
          </span>
          {endIndex < products.length ? (
            <Link
              className='bg-primary px-2 py-1 text-primary underline-offset-4 hover:underline'
              href={`?page=${currentPage + 1}`}
            >
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ViewList;
