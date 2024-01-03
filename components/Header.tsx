import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { Link } from "./ui";
import Navbar from "./Navbar";
import { Suspense } from "react";
import Avatar from "./Avatar";
import { CartSlider } from "./CartSlider";

export default async function Header() {
  return (
    <>
      <Suspense>
        <header
          className={cn("md:stick relative top-0 z-50 bg-primary shadow-sm")}
        >
          <nav className='mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-3 md:px-6'>
            {/* Logo */}
            <Link
              href='/'
              className='relative flex flex-row items-center gap-2 sm:flex-row'
            >
              <div>
                <Image
                  src={Logo}
                  priority
                  alt='Yash Godara Logo'
                  className='h-8 w-8 rounded-full'
                  width={40}
                  height={40}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-primary'>STORE</span>
              </div>
            </Link>

            <div className='flex flex-row items-center justify-center gap-x-3'>
              <Suspense>
                <Navbar />
              </Suspense>
              <div className='item-center flex flex-row gap-x-3'>
                <div className='relative flex items-center'>
                  <CartSlider />
                </div>
                <div className='relative flex items-center'>
                  {/* <CartSlider /> */}
                  <Avatar />
                </div>
              </div>
            </div>

            {/* Login Register button */}
          </nav>
        </header>
      </Suspense>
    </>
  );
}
