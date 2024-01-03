"use client";
import React, { Fragment } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Transition, Menu } from "@headlessui/react";
import { TbDotsVertical } from "react-icons/tb";
import { NavLink } from "./ui";

type navLinksProps = {
  href: string;
  label: string;
};

const navLinks: navLinksProps[] = [
  {
    href: "/",
    label: "Explore",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/about",
    label: "About",
  },
];

const Navbar = () => {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <>
      <div className='item-center flex flex-row'>
        {/* Desktop Nav */}
        <ul className='relative hidden h-8 items-center justify-center gap-1 sm:flex'>
          {navLinks.map((link: navLinksProps) => (
            <li key={link.label}>
              <NavLink
                className='text-primary hover:bg-tertiary'
                href={link.href}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Small Nav Menu */}
        <div className='flex flex-row items-center justify-normal gap-x-2 sm:hidden'>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
