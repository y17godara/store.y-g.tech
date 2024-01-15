"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { cn } from "@/lib/utils";
import { useCurrentSession } from "@/hooks/currentSession";
import { Skeleton } from "@/components/ui/Skeleton";
import { userFavProducts } from "@/actions/get-products";
import FavProduct from "@/components/view/components/favProduct";
import {
  incrementProduct,
  decrementProduct,
} from "@/redux/features/cart/cartSlice";

export type FavProducts = {
  id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
};

export type Product = {
  id: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  ratings: number;
  discount: number;
  featuredImage: string;
  category: string;
  company: string;
  addedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

const FavCarousel = () => {
  const [slides, setSlides] = useState<FavProducts[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isPending, startTransition] = useTransition();

  const session = useCurrentSession();
  const user = session.data?.user;

  useEffect(() => {
    // Check if session and user ID are present
    if (!session.data || !user) {
      return; // Exit early if session or user is not available
    }

    async function getSlides() {
      try {
        startTransition(() => {
          userFavProducts(user)
            .then((data: any) => {
              // console.log(data); // Debug
              if (data?.error) {
                setSlides([]);
                setDataLoaded(true);
              }

              if (data?.success) {
                setSlides(data.data);
                setDataLoaded(true);
              }
            })
            .catch(() => {
              setSlides([]);
              setDataLoaded(true);
            });
        });
      } catch (err: any) {
        setSlides([]);
        setDataLoaded(true);
      }
    }

    getSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.data, user]);

  if (!session?.data && !user) return null;
  if (!user) return null;

  if (!dataLoaded) return <Skeleton />;

  return (
    <>
      <div
        className='flow-col relative flex w-full animate-in gap-2 md:gap-8'
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <div className='relative flex w-full flex-col gap-4'>
          <div className='relative flex flex-col items-center justify-center text-wrap rounded-md border border-secondary p-2 text-center transition-all duration-300'>
            <span className='text-sm font-bold md:text-lg'>
              Explore Deals on Your Favourite Products
            </span>
          </div>

          <Carousel
            className='rounded-md'
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className='rounded-md'>
              {dataLoaded && !isPending && slides.length > 0 ? (
                <>
                  {slides.map((favProduct: FavProducts) => (
                    <CarouselItem
                      key={favProduct.id}
                      className='relative h-60 w-full overflow-hidden rounded-md md:basis-1/3'
                    >
                      <div className='relative flex h-60 w-full flex-col gap-4 overflow-hidden rounded-md border border-secondary p-2 sm:flex-row md:flex-col'>
                        <BannerItem product={favProduct.product} />
                        {/* Created Time on Top Right Absolute */}
                        <div className='absolute left-2 top-2 flex rounded-md border-2 border-secondary bg-primary p-1 px-2 text-xs text-secondary'>
                          {new Date(favProduct.updatedAt).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            }
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </>
              ) : (
                <div className='relative h-60 w-full'>
                  <Skeleton />
                </div>
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

const BannerItem = ({ product }: { product: Product }) => {
  const {
    name,
    description,
    price,
    discount,
    featuredImage,
    company,
    id,
    productId,
    ratings,
    category,
    addedBy,
  } = product;

  const dispatch = useDispatch();

  const handleInc = (productId: string) => () => {
    dispatch(
      incrementProduct({
        id,
        productId,
        name,
        description,
        price,
        ratings,
        discount,
        featuredImage,
        category,
        company,
        addedBy,
        quantity: 1,
      })
    );
  };

  const productCount = useSelector((state: any) => state.cart.items[productId]);
  return (
    <>
      <Link
        href={`/products/${productId}`}
        className='relative flex h-32 w-full overflow-hidden rounded-md border-b border-secondary shadow-sm sm:h-full sm:w-1/2 md:h-32 md:w-full'
      >
        <Image
          src={featuredImage}
          alt={name}
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
      </Link>
      <div className='flex h-full w-full flex-1 flex-col gap-x-4 px-2 pt-2 text-start text-xs'>
        <div className='flex flex-col gap-2'>
          <div className='flex w-full flex-row justify-between'>
            <div>
              <p className='line-clamp-1 text-lg font-bold'>{name}</p>
              {company === "unknown" ? null : (
                <p className='line-clamp-1 text-sm underline underline-offset-2'>
                  {company}
                </p>
              )}
            </div>
            <div>
              <FavProduct productId={productId} />
            </div>
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-primary'>${price}</p>
            <p className='text-sm text-secondary line-through'>
              ${Math.round(price / (1 - discount / 100))}
            </p>

            <p className='text-sm text-secondary '>{discount}% off</p>
          </div>

          <div className='flex flex-row gap-2'>
            {productCount ? (
              <div className='flex flex-row gap-3'>
                <button
                  className='text-sm text-primary'
                  onClick={handleInc(productId)}
                >
                  +
                </button>
                <p className='text-sm text-primary'>{productCount}</p>
                <button
                  className='text-sm text-primary'
                  onClick={() =>
                    dispatch(decrementProduct({ productId, quantity: 1 }))
                  }
                >
                  -
                </button>
              </div>
            ) : (
              <>
                <button
                  className='text-sm text-secondary underline hover:text-primary'
                  onClick={handleInc(productId)}
                >
                  Add to cart
                </button>
              </>
            )}
            <button className='text-sm text-secondary underline hover:text-primary'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCarousel;
