"use client";
import React from "react";
import { CiGrid41, CiCircleList, CiImageOn } from "react-icons/ci";
import { cn } from "@/lib/utils";

export function ChangeView({
  currentView,
  page,
  limit,
}: {
  currentView: string;
  page: number;
  limit: number;
}) {
  return (
    <>
      <div
        className='flex flex-row items-center justify-end gap-x-0 rounded-lg border border-secondary p-0 text-end transition-colors'
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <button
          onClick={() => {
            window.location.href = `/products?page=${
              page - 1
            }&limit=${limit}&view=grid`;
          }}
          className={cn(
            "border-secondary transition-colors",
            currentView === "grid" ? "border" : ""
          )}
        >
          <CiGrid41
            title={"Grid"}
            className={
              "h-5 w-5 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
        <button
          onClick={() => {
            window.location.href = `/products?page=${
              page - 1
            }&limit=${limit}&view=list`;
          }}
          className={cn(
            "border-secondary transition-colors",
            currentView === "list" ? "border" : ""
          )}
        >
          <CiCircleList
            title={"List"}
            className={
              "h-5 w-5 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
        <button
          onClick={() => {
            window.location.href = `/products?page=${
              page - 1
            }&limit=${limit}&view=full`;
          }}
          className={cn(
            "border-secondary transition-colors",
            currentView === "full" ? "border" : ""
          )}
        >
          <CiImageOn
            title={"Full"}
            className={
              "h-5 w-5 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
      </div>
    </>
  );
}
