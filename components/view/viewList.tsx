import React from "react";
import { type Product } from "@/types/index";

function viewList({ products }: { products: Product[] }): JSX.Element {
  return (
    <div className='flex w-full flex-col gap-4 '>
      {products.map((product: Product) => (
        <div
          key={product.productId}
          className='rounded-lg bg-secondary p-6 text-primary shadow'
        >
          <div className='mt-4 flex flex-col'>
            <h3 className='title-font mb-1 text-xs tracking-widest'>
              {product.category}
            </h3>
            <h2 className='title-font text-lg font-medium '>{product.name}</h2>
            <p className='mt-1'>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default viewList;
