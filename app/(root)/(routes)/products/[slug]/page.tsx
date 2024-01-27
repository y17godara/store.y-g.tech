import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { getProductById } from "../action";
import { Skeleton } from "@/components/ui/Skeleton";
import ProductCard from "../components/ProductCard";
import { getUser } from "@/actions/session";
import UserHistory from "../../components/UserHistory";

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

  const user = await getUser();

  return (
    <>
      <Suspense>
        <div className='flex w-full flex-col items-end justify-end gap-y-16 divide-y-2 divide-secondary p-2 text-start'>
          <div className='w-full'>
            <div className='w-fulll flex flex-col items-center gap-4 text-start'>
              {/* Burger */}
            </div>
          </div>
          <div
            className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
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
