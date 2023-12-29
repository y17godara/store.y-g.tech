import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { Link } from "./ui";
import Navbar from "./Navbar";
import { auth } from "@/auth";
import { SignInButton } from "./SignInButton";
import { Suspense } from "react";

export default async function Header() {
  const session: any = await auth();
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

            <Suspense>
              <Navbar />
            </Suspense>

            {/* Login Register button */}
            <div
              className='
              hidden items-center sm:flex sm:space-x-2 
            '
            >
              <div className='relative '>
                <ThemeToggle />
              </div>

              <div className='flex flex-row items-center gap-2'>
                <div className='relative h-8 w-8 rounded-full bg-primary'>
                  {session ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                      width={100}
                      height={100}
                      className='rounded-full'
                    />
                  ) : (
                    <span
                      title='Guest'
                      className='
                      flex h-full w-full 
                      cursor-pointer items-center justify-center 
                      rounded-full border-2 border-primary font-medium text-primary
                    '
                    >
                      G
                    </span>
                  )}
                </div>
                {/* is session */}
                <SignInButton />
              </div>
            </div>
          </nav>
        </header>
      </Suspense>
    </>
  );
}
