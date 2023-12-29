"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <Carousel
        className='w-full rounded-md'
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className='rounded-md'>
          <CarouselItem className=' relative  h-20 w-full basis-2/4 overflow-hidden rounded-md md:basis-1/4'>
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
          <CarouselItem className=' relative  h-20 w-full basis-2/4 overflow-hidden rounded-md md:basis-1/4'>
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
          <CarouselItem className=' relative h-20 w-full basis-2/4 overflow-hidden rounded-md md:basis-1/4'>
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
          <CarouselItem className='relative h-20 w-full basis-2/4 overflow-hidden rounded-md md:basis-1/4'>
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

export default Features;
