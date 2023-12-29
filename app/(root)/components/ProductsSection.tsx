import React from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import ProductsSlider, { slideProp } from "./ProductsSlider";
import { cn } from "@/lib/utils";

const ProductsSection = ({
  title,
  slides,
  span,
  alt,
}: {
  span?: string;
  title?: string;
  slides: slideProp[];
  alt?: string;
}) => {
  return (
    <div
      className='flex animate-in flex-col gap-2 md:gap-4'
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <div className='flex w-full items-center justify-end px-2 text-end'>
        <Link
          href='/'
          className='group flex flex-row gap-1 text-xs underline-offset-4 transition-all duration-200 ease-linear hover:text-brand hover:underline md:text-sm'
        >
          {alt ? alt : "View All"}
          <span>
            <GoArrowRight size={18} className={"group-hover:-rotate-45"} />
          </span>
        </Link>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 md:gap-8",
          span === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
        )}
      >
        {title && (
          <>
            <div
              className='flex flex-col items-center justify-center text-wrap rounded-md border border-secondary bg-secondary
              p-2
                text-center transition-all duration-300'
            >
              <span className='text-sm font-bold sm:w-[100px] md:w-[240px] md:text-lg'>
                {title}
              </span>
            </div>
          </>
        )}
        <ProductsSlider slides={slides} />
      </div>
    </div>
  );
};

export default ProductsSection;
