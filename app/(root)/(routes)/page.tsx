import { Suspense } from "react";
import HomeCarousel from "../components/Carousel";
import UserFavProductsCarousel from "../components/FavProducts-Carousel";
import ProductsSlider from "../components/ProductsSlider";
import Features from "../components/Features";
import ProductsSection from "../components/ProductsSection";

import { Skeleton } from "@/components/ui/Skeleton";

export default async function page() {
  return (
    <>
      <div className='relative flex w-full flex-col gap-16 md:gap-24'>
        <div className='relative flex w-full animate-in flex-col gap-8'>
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

        {/* Personalized Products */}
        <Suspense fallback={<Skeleton />}>
          <UserFavProductsCarousel />
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
