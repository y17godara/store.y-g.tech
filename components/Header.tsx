"use client";
import React, { Fragment } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Transition, Menu } from "@headlessui/react";
import { Cart } from "./Cart";
import { TbDotsVertical } from "react-icons/tb";
import { NavLink, Link } from "./ui";

export function Header() {
  const pathname = `/${usePathname().split("/")[1]}`;
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

          {/* Desktop Nav */}
          <ul className='relative hidden h-8 items-center justify-center gap-1 sm:flex'>
            {navLinks.map((link: navLinksProps, index: number) => (
              <li key={index}>
                <NavLink
                  className='text-primary hover:bg-tertiary'
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <Cart />
          </ul>

          {/* Small Nav Menu */}
          <div className='relative ml-auto sm:hidden'>
            <div className='text-right'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='inline-flex items-center rounded-lg p-1 text-secondary hover:text-primary focus:ring-0 focus-visible:outline-none'>
                    <TbDotsVertical className='h-5 w-5' aria-hidden='true' />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-6  max-h-60 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base capitalize shadow-sm focus:outline-none sm:text-sm dark:bg-black'>
                    <div className='flex flex-col gap-1 px-1 py-1'>
                      {navLinks.map((link: navLinksProps, index: number) => {
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <NavLink
                                href={link.href}
                                className={cn(
                                  "rounded-md px-4 py-2 text-sm transition-colors hover:bg-tertiary hover:text-primary",
                                  pathname === link.href
                                    ? "bg-secondary font-medium"
                                    : "font-normal"
                                )}
                              >
                                {link.label}
                              </NavLink>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          {/* Right */}

          {/* Login Register button */}
          <div
            className='
              hidden sm:flex sm:items-center sm:space-x-2
              md:space-x-4
            '
          >
            <div className='relative ml-auto'>
              <ThemeToggle />
            </div>
            <NavLink
              href='/login'
              className='inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-2 text-sm font-medium text-primary hover:bg-tertiary'
            >
              Login
            </NavLink>

            <NavLink
              href='/register'
              className='inline-flex items-center rounded-md border border-transparent bg-secondary px-2 py-2 text-sm font-medium text-primary hover:bg-tertiary'
            >
              Register
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

type navLinksProps = {
  href: string;
  label: string;
};

const navLinks: navLinksProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/explore",
    label: "Explore",
  },
  {
    href: "/about",
    label: "About",
  },
];
