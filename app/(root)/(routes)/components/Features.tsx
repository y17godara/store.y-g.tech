"use client";

import { useState, useTransition } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

import { Skeleton } from "@/components/ui/Skeleton";

const Card: {
  id: number;
  theme: string;
  title: string;
}[] = [
  {
    id: 1,
    theme: "bg-red-900",
    title: "Quality Products",
  },
  {
    id: 2,
    theme: "bg-blue-900",
    title: "Exclusive Deals",
  },
  {
    id: 3,
    theme: "bg-green-400",
    title: "Fast Delivery",
  },
  {
    id: 4,
    theme: "bg-yellow-400",
    title: "Best Prices",
  },
  {
    id: 5,
    theme: "bg-purple-400",
    title: "Secure Payments",
  },
];

const Features = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      <Carousel
        className='w-full rounded-md'
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className='rounded-md'>
          {!loading ? (
            <>
              {Card.map((card) => {
                return (
                  <>
                    <CarouselItem
                      key={card.id}
                      className='relative h-24 w-full overflow-hidden rounded-md sm:basis-2/4 md:basis-2/4 lg:basis-1/4'
                    >
                      <div
                        className={cn(
                          `border-1 relative flex h-24
                    w-full items-center justify-center overflow-hidden rounded-md border-secondary p-4
                    transition-all duration-300
                  `,
                          card.theme
                        )}
                      >
                        <span
                          className={cn(`font-mono z-10 w-full text-center text-sm 
                    font-bold text-white
                    transition-all duration-300 sm:text-lg lg:text-2xl
                  `)}
                        >
                          {card.title}
                        </span>

                        {/* SVG */}
                        <svg
                          className={cn(`-z-1 absolute -left-5 -top-5 h-20 w-20 text-black opacity-10
                    transition-all duration-300
                  `)}
                          viewBox='0 0 200 200'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='currentColor'
                            d='M46.7,-58.5C59.2,-51.7,66.9,-36.9,69.6,-21.6C72.3,-6.3,70,9.6,63.5,23.5C57.1,37.4,46.5,48.3,32.7,56.8C18.9,65.3,1.9,71.4,-15.8,71.9C-33.5,72.4,-56.9,67.3,-69.5,54.7C-82.1,42.1,-83.9,21.1,-78.6,4.2C-73.3,-12.7,-61,-25.4,-48.1,-32.2C-35.2,-39,-21.8,-39.9,-9.4,-41.3C3,-42.7,6,-44.6,12.6,-49.8C19.3,-55,29.5,-63.5,46.7,-58.5Z'
                            transform='translate(100 100)'
                          />
                        </svg>

                        {/* SVG */}
                        <svg
                          className={cn(`-z-1 absolute -bottom-5 -right-5 h-20 w-20 text-white opacity-10
                    transition-all duration-300
                  `)}
                          viewBox='0 0 200 200'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='currentColor'
                            d='M46.7,-58.5C59.2,-51.7,66.9,-36.9,69.6,-21.6C72.3,-6.3,70,9.6,63.5,23.5C57.1,37.4,46.5,48.3,32.7,56.8C18.9,65.3,1.9,71.4,-15.8,71.9C-33.5,72.4,-56.9,67.3,-69.5,54.7C-82.1,42.1,-83.9,21.1,-78.6,4.2C-73.3,-12.7,-61,-25.4,-48.1,-32.2C-35.2,-39,-21.8,-39.9,-9.4,-41.3C3,-42.7,6,-44.6,12.6,-49.8C19.3,-55,29.5,-63.5,46.7,-58.5Z'
                            transform='translate(100 100)'
                          />
                        </svg>
                      </div>
                    </CarouselItem>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <CarouselItem className='relative h-24 w-full overflow-hidden rounded-md'>
                <Skeleton />
              </CarouselItem>
            </>
          )}
        </CarouselContent>
        {!loading ? (
          <>
            <CarouselPrevious className='left-1 top-1/2 hidden -translate-y-1/2 transform sm:absolute sm:inline-flex xl:hidden'></CarouselPrevious>
            <CarouselNext className='right-1 top-1/2 hidden -translate-y-1/2 transform sm:absolute sm:inline-flex xl:hidden'></CarouselNext>
            <CarouselPrevious className='hidden xl:inline-flex'></CarouselPrevious>
            <CarouselNext className='hidden xl:inline-flex'></CarouselNext>
          </>
        ) : null}
      </Carousel>
    </>
  );
};

export default Features;
