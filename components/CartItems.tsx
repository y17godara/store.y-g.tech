import React from "react";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
} from "@/redux/features/cart/cartSlice";

export const CartItem = () => {
  const products = useSelector((state: any) => state.cart.products);
  return (
    <>
      <ul className='flex w-full flex-col gap-4 pt-10'>
        {products.map((product: any) => {
          return <Cart product={product} key={product.id} />;
        })}
      </ul>
    </>
  );
};

export function Cart({ product, key }: { product: any; key: any }) {
  const {
    id,
    name,
    company,
    description,
    price,
    ratings,
    category,
    addedBy,
    discount,
    productId,
    image,
  } = product;
  const dispatch = useDispatch();

  const handleInc = (productId: string) => () => {
    dispatch(
      incrementProduct({
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
        quantity: 1,
      })
    );
  };

  const productCount = useSelector((state: any) => state.cart.items[productId]);

  return (
    <>
      <li
        key={product.id}
        className='flex min-h-32 w-full flex-col gap-4 rounded-md border border-secondary px-2 py-4 sm:flex-row'
      >
        <div className='relative h-20 w-auto overflow-hidden rounded-md sm:h-32 sm:w-1/2'>
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
        <div className='flex h-full w-full flex-1 gap-x-4 text-start text-xs'>
          <div className='flex w-full flex-col gap-2'>
            <div>
              <p className='text-md line-clamp-2 font-bold'>{name}</p>
            </div>

            <div className='flex flex-row gap-2'>
              <p className='text-lg font-bold text-primary'>${price}</p>
              <p className='text-sm text-gray-400 line-through'>
                ${Math.round(price / (1 - discount / 100))}
              </p>

              <p className='text-sm text-gray-400'>{discount}% off</p>
            </div>

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
                onClick={() =>
                  dispatch(decrementProduct({ productId, quantity: 1 }))
                }
              >
                -
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
