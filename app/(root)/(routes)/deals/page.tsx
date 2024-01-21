import React from "react";
import { getSiteDeals } from "@/actions/get-deals";

export const revalidate = 3600;

export const runtime = "nodejs";

export const getDeals = async () => {
  const deals = await getSiteDeals();
  return deals?.data;
};

export default async function page() {
  const deals = await getDeals();

  if (!deals) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <h2 className='text-xl'>Deals upto {"50"}% off</h2>
        </div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {deals.map((deal) => (
            <div key={deal.id}>{deal.discount}</div>
          ))}
        </div>
      </div>
    </>
  );
}
