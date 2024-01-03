"use client";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
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
import { MdLogin, MdLogout } from "react-icons/md";
import { logout } from "@/actions/logout";
import { ThemeToggle } from "./ThemeToggle";

function AvatarMenu() {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image!} />
            {user?.name ? (
              <>
                <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
              </>
            ) : (
              <>
                <AvatarFallback>G</AvatarFallback>
              </>
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-primary text-primary'>
          <DropdownMenuLabel>{user?.name || "Guest"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:bg-tertiary'>
            <Link href='#'>Orders</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-tertiary'>
            <Link href='/user/settings'>Settings</Link>
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
          <DropdownMenuSeparator />
          <DropdownMenuItem className='hover:bg-tertiary'>
            {/* Theme */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default AvatarMenu;
