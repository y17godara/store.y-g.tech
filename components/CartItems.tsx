import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { getProductById } from "@/app/(root)/(routes)/products/action";

export const CartItem = () => {
  const [products, setProducts] = React.useState<any>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await getProductById("1");
      setProducts(productsFromServer);
    };

    getProducts();
  }, []);
  return (
    <>
      <ul className='flex flex-col gap-4'>
        {Object.keys(products).map((key) => {
          return <Cart product={products} key={Object.keys(products)} />;
        })}
      </ul>
    </>
  );
};

export function Cart({ product }: any) {
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  console.log(product);

  return (
    <>
      <li
        key={product.id}
        className='border-tertiary flex min-h-32 flex-row gap-4 rounded-md border px-2 py-4'
      >
        Test
        {/* <div className='relative h-48 w-48 overflow-hidden rounded-md'>
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
                ${Math.round(price / (1 - discount / 100))}
              </p>

              <p className='text-sm text-gray-400'>{discount}% off</p>
            </div>

            <div className='flex flex-row gap-2'>
              <button
                className='text-sm text-gray-400 underline'
                onClick={() => console.log("Remove Clicked")}
              >
                Add to cart
              </button>
              <button className='text-sm text-gray-400 underline'>
                Buy Now
              </button>
            </div>
          </div>
        </div> */}
      </li>
    </>
  );
}
