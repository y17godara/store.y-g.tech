import Image from "next/image";
import { cn } from "@/lib/utils";

export const CartItem = ({ products }: { products: any }) => {
  return (
    <>
      <ul className='flex flex-col gap-4'>
        {Object.keys(products).map((key) => (
          <Cart productId={products[key].id} key={key} />
        ))}
      </ul>
    </>
  );
};

export function Cart({ key, productId }: any) {
  // use server

  const getProductById = (productId: any) => {
    const fetchData = async () => {
      const res = await fetch("/api/products/find", {
        method: "POST",
        body: JSON.stringify(productId),
      });
      const data = await res.json();
      return data;
    };

    return fetchData();
  };

  const product: any = getProductById("9b6ad7fa-4a35-4686-9be1-ec883b8bdc66");
  console.log("product", product);
  const { name, description, price, discount, image, company } = product;
  return (
    <>
      <li
        key={productId}
        className='border-tertiary flex min-h-32 flex-row gap-4 rounded-md border px-2 py-4'
      >
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
        </div>
      </li>
    </>
  );
}
