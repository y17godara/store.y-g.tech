"use client";
import React from "react";
import { type Product } from "@/types/index";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const productSkeleton = () => {
  return (
    <>
      <div className='flex min-h-32 flex-col gap-4 rounded-md bg-tertiary p-4'></div>
    </>
  );
};

function viewList({ products }: { products: Product[] }): JSX.Element {
  return (
    <div className='flex w-full flex-col gap-4 '>
      {products.map((product: Product) => (
        <div
          key={product.productId}
          className='border-tertiary flex min-h-32 flex-row gap-4 rounded-md border px-2 py-4'
        >
          <div className='relative h-48 w-48'>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className={"rounded-md"}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className='flex h-full w-full flex-1 text-xs'>
            <div>
              <FaHeart />
            </div>
            <div>
              <p className='font-bold'>{product.name}</p>
              <p className=''>{product.price}</p>
              <p className=''>{product.description}</p>
              <p className=''>{product.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default viewList;
