import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { NavLink, Link } from "./ui";
import Navbar from "./Navbar";

export function Header() {
  const session = false;
  return (
    <>
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

          <Navbar />

          {/* Login Register button */}
          <div
            className='
              hidden items-center sm:flex sm:space-x-2 
            '
          >
            <div className='relative '>
              <ThemeToggle />
            </div>

            {/* is session */}
            {session ? (
              <>
                <NavLink
                  href='/signout'
                  className='inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-1 text-sm font-medium text-primary hover:bg-tertiary'
                >
                  SignOut
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  href='/signin'
                  className='inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-1 text-sm font-medium text-primary hover:bg-tertiary'
                >
                  SignIn
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
