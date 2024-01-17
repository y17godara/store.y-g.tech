"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { SearchSchema } from "@/schemas";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";

function SearchBar() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onsubmit = async (values: z.infer<typeof SearchSchema>) => {
    try {
      startTransition(() => {
        router.push(`/search?search=${values.search}`);
      });
    } catch (err: any) {
      // console.log("err", err); // debug
      setError(err.message);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className='flex flex-col'>
          <div
            className={cn(
              "relative h-8 w-full items-center justify-center rounded-[0.5rem] border border-secondary bg-primary text-center text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64"
            )}
          >
            <FormField
              control={form.control}
              name={"search"}
              render={({ field }) => (
                <FormItem className='h-full w-full'>
                  <FormControl>
                    <input
                      autoComplete='off'
                      {...field}
                      disabled={isPending}
                      type='text'
                      placeholder='Search...'
                      className='placeholder-primary relative inset-0 h-full w-full items-center rounded-[0.5rem] border-none bg-transparent pl-2 pr-2 text-sm font-normal text-primary focus:bg-primary focus:outline-none focus:ring-0 sm:pr-9'
                    />
                  </FormControl>
                  <FormMessage className='text-xs text-secondary' />
                </FormItem>
              )}
            />
            <button
              disabled={isPending}
              type='submit'
              className='font-mono absolute right-[0.1rem] top-[0.3rem] flex h-5 select-none items-center gap-1 rounded border border-secondary bg-primary px-1.5 text-[10px] font-medium opacity-100'
            >
              <span className='hidden text-xs sm:flex'>Search ⏎</span>
              <span className='text-xs sm:hidden'>
                <FaSearch />
              </span>
            </button>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
      </Form>
    </>
  );
}

export default SearchBar;
