"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Metadata } from "next";
import { Link } from "@/components/ui/index";

export const metadata: Metadata = {
  title: "Error",
  description: "Error",
};

const ErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errMsg = searchParams.get("error");
  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1>404 - Page not found</h1>{" "}
        <p className='text-secondary'>
          Uh oh! This page does not exists, maybe you clicked an old link or
          misspelled. Please try again{" "}
        </p>
        <div className='h-2' />{" "}
        <Link href='/' className='hover:underline'>
          Return home{" "}
        </Link>{" "}
      </div>
    </>
  );
};

export default ErrorPage;
