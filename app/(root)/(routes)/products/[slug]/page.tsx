import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { getProductById } from "../action";
import { Skeleton } from "@/components/ui/Skeleton";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
  searchParams: URLSearchParams;
};

export type ProductImages = {
  id: string;
  imageUrl: string;
  product?: string;
  productId?: string;
  createdAt: Date;
  updatedAt: Date;
}[];

export type ProductProps = {
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
  images?: ProductImages;
};

const Product = async (slug: any) => {
  const product = await getProductById(slug);
  // console.log(product);

  if (!product) {
    notFound();
  }

  return product;
};

export async function generateMetadata(
  { params }: Props,
  parents: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const product = await Product(slug);

  const { name, description }: any = product;

  const metadata: Metadata = {
    title: `${name} | Products`,
    description: description,
    openGraph: {
      title: `${name} | Product`,
      description: description,
      images: [
        {
          url: `/api/og?title=${name}`,
          alt: name,
        },
      ],
    },
  };

  return metadata;
}

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const product = await Product(slug);

  return (
    <>
      <Suspense>
        <div className='flex w-full flex-col items-end justify-end gap-y-8 py-2 text-start md:gap-y-16'>
          <div
            className='relative flex w-full animate-in flex-col items-start justify-start gap-y-4 px-2 md:px-0'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Suspense fallback={<Skeleton className='h-full w-full ' />}>
              <BreadCrumb productId={product.productId} name={product.name} />
            </Suspense>
          </div>
          <div
            className='flex w-full animate-in flex-col gap-y-16 overflow-x-hidden overflow-y-hidden md:gap-y-24'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Suspense fallback={<Skeleton />}>
              <ProductCard product={product} />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </>
  );
}

const BreadCrumb = ({
  productId,
  name,
}: {
  productId: string;
  name: string;
}) => {
  return (
    <>
      <div className='flex w-full flex-row items-center justify-start gap-x-1'>
        <Link
          href='/products'
          className='underline-offset-4 transition-all duration-150 hover:underline'
        >
          <span className='text-sm text-primary sm:text-sm lg:text-lg'>
            Products
          </span>
        </Link>
        <span className='text-xs font-semibold text-primary'>/</span>
        <Link
          href={`/products/${productId}`}
          className='underline-offset-4 transition-all duration-150 hover:underline'
        >
          <span className='text-sm  font-semibold text-primary sm:text-sm lg:text-lg'>
            {name}
          </span>
        </Link>
      </div>
    </>
  );
};
