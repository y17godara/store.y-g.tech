"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomeCarousel = () => {
  return (
    <>
      <Carousel
        className='rounded-md'
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className='rounded-md'>
          <CarouselItem className='relative h-60 w-full overflow-hidden rounded-md'>
            <div
              className={cn(`rounded-md border border-secondary
              bg-secondary
                p-2 transition-all duration-300
              `)}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              Working
            </div>
          </CarouselItem>
          <CarouselItem className='relative h-60 w-full overflow-hidden rounded-md'>
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

export default HomeCarousel;
