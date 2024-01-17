import { getSearch } from "@/actions/search";
import { Grid } from "@/components/view/viewGrid";
import { Redirect } from "next";
import { redirect } from "next/dist/server/api-utils";

export const revalidate = 3600;

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
          <div className='flex animate-in flex-col gap-8'>Not Found</div>
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

  if (!data) return <div>loading...</div>;
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          {!data ? "Searching..." : "Search"}
        </div>

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
      </div>
    </>
  );
}
