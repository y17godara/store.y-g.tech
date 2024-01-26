import { Suspense } from "react";
import { type ProductProps, type ProductImages } from "../[slug]/page";
import { MdStar, MdStarHalf } from "react-icons/md";
import { DetailsFooter } from "./Cart";

export const ProductCard = async ({ product }: { product: ProductProps }) => {
  return (
    <>
      <section className='relative flex h-full w-full flex-col gap-y-8'>
        <Suspense>
          {/* Images Slider */}
          <Images featured={product.featuredImage} images={product.images} />
        </Suspense>
        <Suspense>{/* Image View and Zoom on Hover Card */}</Suspense>
        <section className='divide-y-2 divide-primary'>
          <Suspense>
            <DetailsHeader product={product} />
          </Suspense>
          <Suspense>
            <DetailsFooter product={product} />
          </Suspense>
        </section>
      </section>
    </>
  );
};

const Images = ({
  featured,
  images,
}: {
  featured: string;
  images?: ProductImages;
}) => {
  return (
    <>
      <section>Images</section>
    </>
  );
};

const DetailsHeader = ({ product }: { product: ProductProps }) => {
  return (
    <>
      <section className='flex h-full w-full flex-col gap-y-2 py-4'>
        <div className='flex h-full w-full flex-col gap-2'>
          <p className='line-clamp-1 text-xs font-normal'>{product.category}</p>
          <div className='flex h-full w-full flex-col'>
            <h1 className='line-clamp-3 text-2xl font-bold'>{product.name}</h1>
            <h2 className='line-clamp-1 text-xs font-semibold'>
              by {product.company}
            </h2>
          </div>
        </div>

        {/* Number of rating out of 5 print golden filled star */}
        <div className='flex h-full w-full flex-col gap-y-2'>
          <Rating rating={product.ratings} />
        </div>

        <div className='flex h-full w-full flex-col gap-y-2'>
          <div className='flex flex-row gap-2'>
            <p className='text-lg font-bold text-primary'>${product.price}</p>
            <p className='text-sm text-secondary line-through'>
              ${Math.round(product.price / (1 - product.discount / 100))}
            </p>
          </div>
          <div
            className='
          flex w-full rounded-md bg-tertiary px-1 py-2 text-sm text-secondary
          '
          >
            <p className='text-lg text-secondary'>
              Special offer {product.discount}% off
            </p>
          </div>
        </div>

        <div className='flex h-full w-full flex-col gap-y-2'>
          <p className='line-clamp-3 text-base text-secondary'>
            {product.description}
          </p>
        </div>

        <div className='flex h-full w-full flex-col gap-y-2'>
          <div className='flex flex-row gap-2'>
            <p className='text-sm text-primary'>Availablity:</p>
            <p className='text-sm text-primary'>{"In Stock"}</p>
          </div>
        </div>
      </section>
    </>
  );
};

const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = Array.from({ length: maxRating }, (_, index) => {
    if (index < fullStars) {
      return <MdStar key={index} className='text-xl' />;
    } else if (index === fullStars && hasHalfStar) {
      return <MdStarHalf key={index} className='text-xl' />;
    } else {
      return <MdStar key={index} className='text-xl' />;
    }
  });

  return (
    <div className='flex h-full w-full flex-row gap-x-1 text-yellow-500 dark:text-yellow-400'>
      {stars}
    </div>
  );
};

export default ProductCard;
