import Image from "next/image";
import { Redirect } from "next";
import { Link, Loading } from "@/components/ui/index";

import { getSearch } from "@/actions/search";
import { Grid } from "@/components/view/viewGrid";

export const revalidate = 3600;

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export default async function page({ searchParams }: { searchParams: string }) {
  const { search }: any = searchParams;

  // redirect to ?search= if no search query

  const response = await getSearch(search);
  const data = response.data;
  // console.log("data", data); // debug

  if (!search || !data) {
    return (
      <>
        <div className='flex flex-col gap-16 md:gap-24'>
          <div className='flex animate-in flex-col gap-8'>404 - Not Found</div>
          <div
            className='flex animate-in flex-col gap-8'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Search for something else
          </div>
        </div>
      </>
    );
  }

  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        {data && data.length > 0 ? (
          <>
            <h3 className='flex animate-in flex-col gap-8 text-lg'>
              Search Result Found
            </h3>
            <div
              className='flex animate-in flex-col gap-8'
              style={{ "--index": 1 } as React.CSSProperties}
            >
              {data.map((product: any) => (
                <div key={product.id}>
                  <Grid {...product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className='relative flex h-full w-full flex-col items-center justify-center gap-8 text-center '>
              <div
                className='flex animate-in flex-col gap-8 text-center'
                style={{ "--index": 1 } as React.CSSProperties}
              >
                OOPS ! No results found for your search
              </div>
              <div
                className='flex animate-in flex-col gap-4 text-center'
                style={{ "--index": 2 } as React.CSSProperties}
              >
                <Image
                  src='/assets/components/empty-cart-1.svg'
                  alt='empty cart'
                  width={100}
                  quality={50}
                  priority
                  className='w-full'
                  height={100}
                />
                <Link href='/' className='hover:underline'>
                  Explore Products
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
