import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { Link } from "./ui";
import Navbar from "./Navbar";
import { Suspense } from "react";
import Avatar from "./Avatar";
import { CartSlider } from "./CartSlider";
import SearchBar from "./SearchBar";

export default async function Header() {
  return (
    <>
      <Suspense>
        <header
          className={cn("md:stick relative top-0 z-50 bg-primary shadow-sm")}
        >
          <nav className='mx-auto flex max-w-[1200px] items-center justify-around gap-3 px-4 py-3 md:px-6'>
            <div className='flex flex-row items-center gap-x-2 sm:gap-x-6'>
              {/* Logo */}
              <Link
                href='/'
                className='relative flex flex-row items-center gap-x-0.5 sm:flex-row sm:gap-2'
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
                <div className='flex flex-col'>
                  <span className='font-medium text-primary'>STORE</span>
                </div>
              </Link>
            </div>

            <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
              <div className='w-full flex-1 md:w-auto md:flex-none'>
                <SearchBar />
              </div>
            </div>

            <div className='flex flex-row items-center justify-center gap-x-0.5 sm:gap-x-3'>
              <Suspense>
                <Navbar />
              </Suspense>

              <div className='item-center flex flex-row gap-x-1 sm:gap-x-3'>
                <div className='relative flex items-center'>
                  <CartSlider />
                </div>
                <div className='relative flex items-center'>
                  <Avatar />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </Suspense>
    </>
  );
}
