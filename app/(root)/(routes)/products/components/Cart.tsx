"use client";

import { useState } from "react";
import { type ProductProps } from "../[slug]/page";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
} from "@/redux/features/cart/cartSlice";

export const DetailsFooter = ({ product }: { product: ProductProps }) => {
  const {
    id,
    productId,
    name,
    description,
    price,
    ratings,
    discount,
    featuredImage,
    category,
    company,
    addedBy,
  } = product;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(1);

  const handleInc = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDec = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const productCount = useSelector((state: any) => state.cart.items[productId]);
  return (
    <>
      <section className='flex h-full w-full flex-col gap-y-2 py-4'>
        <div className='flex h-full w-full flex-col justify-between gap-2'>
          <p className='text-sm text-primary'>Quantity:</p>
          <div className='flex h-full w-full flex-row items-center justify-between '>
            {/* Quntiy input with + and - */}
            <div className='flex w-16 flex-row items-center justify-center text-center'>
              <input
                className='h-full w-6 px-2 py-1 text-sm font-semibold text-primary focus:ring-0'
                type='number'
                typeof='number'
                value={productCount}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {productCount}
              </input>
              <div className='flex w-6 flex-col items-center justify-center text-center'>
                <button
                  className='
                    rounded-md border
                    border-secondary
                    px-2
                    py-1
                    text-sm
                    font-semibold
                    text-secondary
                    hover:bg-secondary
                    hover:text-white
                '
                  onClick={handleInc}
                >
                  +
                </button>

                <button
                  className='
                    rounded-md border
                    border-secondary
                    px-2
                    py-1
                    text-sm
                    font-semibold
                    text-secondary
                    hover:bg-secondary
                    hover:text-white
                '
                  onClick={handleDec}
                >
                  -
                </button>
              </div>
            </div>

            <div>
              <p className='text-sm text-primary'>
                ${(price * quantity).toFixed(2)}
              </p>
            </div>

            {/* Add to cart button */}
            <button
              className='line-clamp-1 inline-flex items-center justify-center rounded-md border border-secondary px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-white'
              onClick={() =>
                dispatch(
                  incrementProduct({
                    id,
                    productId,
                    name,
                    description,
                    price,
                    ratings,
                    discount,
                    featuredImage,
                    category,
                    company,
                    addedBy,
                    quantity,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
