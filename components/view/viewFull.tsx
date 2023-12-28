"use client";
import React from "react";
import { type Product } from "@/types/index";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
} from "@/redux/features/cart/cartSlice";
import FavProduct from "./components/favProduct";

export function Full({
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
  const dispatch = useDispatch();

  const handleInc = (id: string) => () => {
    dispatch(incrementProduct(id));
  };

  const productCount = useSelector((state: any) => state.cart.items[productId]);

  return (
    <>
      <li className='flex min-h-32 flex-col gap-4 rounded-md border border-secondary px-2 py-4'>
        <div className='relative h-48 w-full overflow-hidden rounded-md'>
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
        <div className='flex h-full w-full flex-1 flex-col gap-x-4 px-2 pt-2 text-start text-xs'>
          <div>
            <FavProduct productId={productId} />
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
            <p className='line-clamp-3 text-base text-secondary'>
              {description}
            </p>

            <div className='flex flex-row gap-2'>
              <p className='text-lg font-bold text-primary'>${price}</p>
              <p className='text-sm text-secondary line-through'>
                ${Math.round(price / (1 - discount / 100))}
              </p>

              <p className='text-sm text-secondary '>{discount}% off</p>
            </div>

            <div className='flex flex-row gap-2'>
              {productCount ? (
                <div className='flex flex-row gap-3'>
                  <button
                    className='text-sm text-primary'
                    onClick={handleInc(productId)}
                  >
                    +
                  </button>
                  <p className='text-sm text-primary'>{productCount}</p>
                  <button
                    className='text-sm text-primary'
                    onClick={() => dispatch(decrementProduct(productId))}
                  >
                    -
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className='text-sm  text-secondary underline hover:text-primary'
                    onClick={handleInc(productId)}
                  >
                    Add to cart
                  </button>
                </>
              )}
              <button className='text-sm  text-secondary underline hover:text-primary'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

function ViewFull({ products }: { products: Product[] }): JSX.Element {
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

  const productsPerPage = 3;

  const endIndex = currentPage * productsPerPage;

  const currentProducts = products.slice(
    currentPage * productsPerPage - productsPerPage,
    endIndex
  );

  return (
    <>
      <ul className='animate-list flex min-h-60 w-full flex-col gap-4'>
        {currentProducts.map((product) => (
          <Full key={product.id} {...product} />
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

export default ViewFull;
