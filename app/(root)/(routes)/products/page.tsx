import { Suspense } from "react";
import { type Product } from "@/types/index";
import { ProductsDisplay } from "./components/productsDisplay";
import { ChangeView } from "./components/changeView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page",
};

export default async function Page() {
  const products: Product[] = [
    {
      id: "1",
      productId: "836b-4256-9295-d1d837c09aea",
      name: "NextJs 14 - Template",
      description:
        "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
      price: 10,
      ratings: 4,
      discount: 30,
      image: "https://i.imgur.com/OeuV5Lf.png",
      category: "y17godara",
      company: "y17godara",
      addedBy: "y17godara",
      createdAt: "2023-12-26T02:35:43.322Z",
      updatedAt: "2023-12-26T02:39:29.277Z",
    },
    {
      id: "2",
      productId: "38cd8bfe-eec7-4ba7-9bec-",
      name: "NextJs 14 - Template",
      description:
        "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
      price: 10,
      ratings: 5,
      discount: 10,
      image: "https://i.imgur.com/OeuV5Lf.png",
      category: "unknown",
      company: "y17godara",
      addedBy: "unknown",
      createdAt: "2023-12-26T05:04:38.321Z",
      updatedAt: "2023-12-26T05:02:57.410Z",
    },
    {
      id: "3",
      productId: "38c48bfe-ca47b64c7b6",
      name: "NextJs 14 - Template",
      description:
        "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
      price: 10,
      ratings: 5,
      discount: 10,
      image: "https://i.imgur.com/OeuV5Lf.png",
      category: "unknown",
      company: "y17godara",
      addedBy: "unknown",
      createdAt: "2023-12-26T05:04:38.321Z",
      updatedAt: "2023-12-26T05:02:57.410Z",
    },
  ];
  return (
    <>
      <Suspense>
        <div className='divide-y-secondary flex w-full flex-col items-end justify-end gap-y-16 p-2 text-start'>
          <div className='flex w-full flex-col items-center gap-4 text-start'>
            <h1 className='w-full text-3xl font-bold'>Products</h1>
          </div>
          <div>
            <Suspense>
              <ChangeView />
            </Suspense>
          </div>
          <div
            className='flex w-full flex-col gap-16 overflow-y-hidden md:gap-24'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Suspense>
              <ProductsDisplay products={products} />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </>
  );
}
