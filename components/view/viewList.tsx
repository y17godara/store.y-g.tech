"use client";
import React, { useState } from "react";
import { type Product } from "@/types/index";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";

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
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 1; // Adjust this based on your preference

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the products array to get only the items for the current page
  const currentProducts = products.slice(startIndex, endIndex);

  // Function to handle pagination
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <ul className='animate-list flex w-full flex-col gap-4'>
        {currentProducts.map((product) => (
          <List key={product.id} {...product} />
        ))}
      </ul>

      {/* Pagination controls */}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= products.length}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ViewList;
