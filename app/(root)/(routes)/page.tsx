import React from "react";
import HomeCarousel from "../components/Carousel";
import ProductsSlider from "../components/ProductsSlider";
import Features from "../components/Features";
import ProductsSection from "../components/ProductsSection";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <HomeCarousel />
        </div>

        <div
          className='flex w-full animate-in flex-col gap-8'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Features />
        </div>

        {/* Personalized Products */}
        <div
          className='flow-col flex animate-in gap-2 md:gap-8'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <div className='flex flex-col gap-4 '>
            <div
              className='flex flex-col items-center justify-center text-wrap rounded-md border border-secondary bg-secondary
              p-2
                text-center transition-all duration-300'
            >
              <span className='text-sm font-bold md:text-lg'>
                Explore Deals on Your Favourite Products
              </span>
            </div>
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
          </div>
        </div>

        {/* Products */}
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

        {/* Products */}
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

        {/* View History */}
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
      </div>
    </>
  );
}
