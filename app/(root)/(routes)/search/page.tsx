// search?q=fefefe
import React from "react";
import { SearchPage } from "@/components/SearchPage";

export default async function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>Search</div>

        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <SearchPage />
        </div>
      </div>
    </>
  );
}
