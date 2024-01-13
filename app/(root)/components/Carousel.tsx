"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Product } from "@/types/index";
import { Skeleton } from "@/components/ui/Skeleton";
import { getFeaturedBanners } from "@/actions/get-featured-banners";

interface Banner {
  id: string;
  href: string;
  bannerURL: string;
  product?: Product;
  productId?: string;
  createdAt: string;
  updatedAt: string;
}

const HomeCarousel = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function getBanners() {
      try {
        startTransition(() => {
          getFeaturedBanners()
            .then((data: any) => {
              if (data?.error) {
                console.error("err no data", data.error);
                setBanners([]);
                setDataLoaded(true);
              }

              if (data?.success) {
                console.log("data", data);
                setBanners(data.data);
                console.log("banners", banners);
                setDataLoaded(true);
              }
            })
            .catch(() => {
              console.error("err catch");
              setBanners([]);
              setDataLoaded(true);
            });
        });
      } catch (err: any) {
        console.error("client err", err);
        setBanners([]);
        setDataLoaded(true);
      }
    }
    getBanners();
  }, []);

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
          {dataLoaded && !isPending && banners.length > 0 ? (
            <>
              {banners.map((banner: any) => (
                <BannerItem key={banner.id} banner={banner} />
              ))}
            </>
          ) : (
            <CarouselItem className='rounded-md'>
              <div className='relative h-60 w-full'>
                <Skeleton />
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
};

const BannerItem = ({ banner }: { banner: Banner }) => {
  return (
    <CarouselItem key={banner.id} className='rounded-md'>
      <div className='relative h-60 w-full'>
        <Image
          src={banner.bannerURL}
          alt={banner.id}
          layout='fill'
          quality={80}
          loading='lazy'
          objectFit='cover'
          className='rounded-md'
        />
      </div>
    </CarouselItem>
  );
};

export default HomeCarousel;
