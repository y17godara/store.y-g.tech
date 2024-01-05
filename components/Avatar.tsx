"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/currentUser";
import Link from "next/link";
import { MdLogin, MdLogout, MdSettings, MdFavorite } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { logout } from "@/actions/logout";
import { ThemeSelect } from "./ThemeSelect";
import { UserAvatar } from "./ui/avatar";

function AvatarMenu() {
  const user: any = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={user?.name} image={user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-primary text-primary'>
          <DropdownMenuLabel>{user?.name || "Guest Account"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className='hove px-0'>
            <ThemeSelect />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:bg-tertiary'>
            <Link href='#' className='flex flex-row items-center gap-1'>
              <IoMdCart className='mr-2' />
              Orders
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-tertiary'>
            <Link href='#' className='flex flex-row items-center gap-1'>
              <MdFavorite className='mr-2' />
              Wishlist
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-tertiary'>
            <Link
              href='/user/settings'
              className='flex flex-row items-center gap-1'
            >
              <MdSettings className='mr-2' />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:bg-tertiary'>
            {user ? (
              <>
                <button
                  onClick={onClick}
                  className='flex flex-row items-center gap-1'
                >
                  <MdLogout className='mr-2' /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href='/auth/login'
                  className='flex flex-row items-center gap-1'
                >
                  <MdLogin className='mr-2' /> Login
                </Link>
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarMenu;
