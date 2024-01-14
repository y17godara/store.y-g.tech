import { Suspense } from "react";
import HomeCarousel from "../components/Carousel";
import ProductsSlider from "../components/ProductsSlider";
import Features from "../components/Features";
import ProductsSection from "../components/ProductsSection";

import { Skeleton } from "@/components/ui/Skeleton";

export default async function page() {
  return (
    <>
      <div className='relative flex flex-col gap-16 md:gap-24'>
        <div className='relative flex animate-in flex-col gap-8'>
          <Suspense fallback={<Skeleton />}>
            <HomeCarousel />
          </Suspense>
        </div>

        <div
          className='relative flex w-full animate-in flex-col gap-8'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Suspense fallback={<Skeleton />}>
            <Features />
          </Suspense>
        </div>

        {/* Personalized Products */}
        <div
          className='flow-col relative flex animate-in gap-2 md:gap-8'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <div className='relative flex flex-col gap-4'>
            <div className='relative flex flex-col items-center justify-center text-wrap rounded-md border border-secondary p-2 text-center transition-all duration-300'>
              <span className='text-sm font-bold md:text-lg'>
                Explore Deals on Your Favourite Products
              </span>
            </div>
            <Suspense fallback={<Skeleton />}>
              <ProductsSlider
                slides={[
                  {
                    id: 1,
                    title: "Product 1",
                    href: "/",
                    src: "/og-bg.png",
                    alt: "Product 1",
                  },
                  {
                    id: 2,
                    title: "Product 1",
                    href: "/",
                    src: "/og-bg.png",
                    alt: "Product 1",
                  },
                  {
                    id: 3,
                    title: "Product 1",
                    href: "/",
                    src: "/og-bg.png",
                    alt: "Product 1",
                  },
                ]}
              />
            </Suspense>
          </div>
        </div>

        {/* Products */}
        <Suspense fallback={<Skeleton />}>
          <ProductsSection
            slides={[
              {
                id: 1,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 2,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 3,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
            ]}
            title={"Explore Deals on Your Favourite Products"}
          />
        </Suspense>

        {/* View History */}

        {/* Products */}
        <Suspense fallback={<Skeleton />}>
          <ProductsSection
            span='right'
            slides={[
              {
                id: 1,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 2,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 3,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
            ]}
            title={"New Arrivals"}
          />
        </Suspense>

        {/* View History */}
        <Suspense fallback={<Skeleton />}>
          <ProductsSection
            slides={[
              {
                id: 1,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 2,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
              {
                id: 3,
                title: "Product 1",
                href: "/",
                src: "/og-bg.png",
                alt: "Product 1",
              },
            ]}
            alt={"History"}
          />
        </Suspense>
      </div>
    </>
  );
}
