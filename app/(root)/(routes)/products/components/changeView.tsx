"use client";
import React from "react";
import { CiGrid41, CiCircleList, CiImageOn } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsView,
  setView,
} from "@/redux/features/view/productsView";

export function ChangeView({
  handleView,
}: {
  handleView: (view: any) => () => void;
}) {
  const currentView = useSelector(selectProductsView);
  console.log("currentView: ", currentView); // debug

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        className='flex flex-row items-center justify-end gap-x-0 rounded-lg border border-secondary p-0 text-end transition-colors'
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <button
          onClick={() => dispatch(setView("grid"))}
          className={cn(
            "border-secondary p-1 transition-colors",
            currentView === "grid" ? "border" : ""
          )}
        >
          <CiGrid41
            title={"Grid"}
            className={
              "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
        <button
          onClick={() => dispatch(setView("list"))}
          className={cn(
            "border-secondary p-1 transition-colors",
            currentView === "list" ? "border" : ""
          )}
        >
          <CiCircleList
            title={"List"}
            className={
              "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
        <button
          onClick={() => dispatch(setView("full"))}
          className={cn(
            "border-secondary p-1 transition-colors",
            currentView === "full" ? "border" : ""
          )}
        >
          <CiImageOn
            title={"Full"}
            className={
              "h-4 w-4 transition-all ease-in-out hover:scale-105 sm:h-5 sm:w-5 md:h-6 md:w-6"
            }
          />
        </button>
      </div>
    </>
  );
}
