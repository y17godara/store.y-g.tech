"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./shadcn/ui/button";
import { useRouter } from "next/navigation";
import SearchDialog from "./SearchDialog";

function SearchBar() {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant='main'
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] border border-secondary bg-primary text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
      >
        <span className='hidden lg:inline-flex'>Quick Search...</span>
        <span className='inline-flex lg:hidden'>Search...</span>
        <kbd className='font-mono pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border border-secondary bg-primary px-1.5 text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <SearchDialog open={open} setOpen={setOpen} />
    </>
  );
}

export default SearchBar;
