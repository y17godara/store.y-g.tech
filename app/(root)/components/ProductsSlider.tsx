"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/components/ui";

export type slideProp = {
  id: number;
  src: string;
  alt: string;
  href: string;
  title: string;
};

const ProductsSlider = ({ slides }: { slides?: slideProp[] }) => {
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
          {slides?.map((slide: slideProp, i: number) => (
            <>
              <CarouselItem
                key={i}
                className='relative h-60 w-full overflow-hidden rounded-md md:basis-1/3'
              >
                <Link
                  href={slide.href}
                  className='relative h-60 w-full overflow-hidden rounded-md '
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
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
                  <p>{slide.title}</p>
                </Link>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ProductsSlider;
