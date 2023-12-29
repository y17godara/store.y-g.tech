"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductsSlider = () => {
  return (
    <>
      <Carousel
        className='rounded-md'
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className='rounded-md'>
          <CarouselItem className='relative h-60 w-full overflow-hidden rounded-md md:basis-1/3'>
            <Image
              src={"/og-bg.png"}
              alt={"OG Image"}
              width={100}
              height={100}
              className={cn(`rounded-md
                transition-all duration-300
              `)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </CarouselItem>
          <CarouselItem className='relative h-60 w-full overflow-hidden rounded-md md:basis-1/3'>
            <Image
              src={"/og-bg.png"}
              alt={"OG Image"}
              width={100}
              height={100}
              className={cn(`rounded-md
                transition-all duration-300
              `)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </CarouselItem>
          <CarouselItem className='relative h-60 w-full overflow-hidden rounded-md md:basis-1/3'>
            <Image
              src={"/og-bg.png"}
              alt={"OG Image"}
              width={100}
              height={100}
              className={cn(`rounded-md
                transition-all duration-300
              `)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ProductsSlider;
