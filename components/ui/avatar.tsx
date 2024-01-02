import React from "react";
import { SignInButton } from "../SignInButton";
import { ThemeToggle } from "../ThemeToggle";
import Image from "next/image";
import { auth } from "@/auth";

export const Avatar = async () => {
  const session: any = await auth();
  return (
    <>
      <div className='relative '>
        <ThemeToggle />
      </div>

      <div className='flex flex-row items-center gap-2'>
        <div className='relative h-8 w-8 rounded-full bg-primary'>
          {session ? (
            <>
              {session.image && session.name ? (
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
                  {session.user?.name[0].toUpperCase() || "G"}
                </span>
              )}
            </>
          ) : (
            <span
              title='Guest'
              className='
                    flex h-full w-full 
                    cursor-pointer items-center justify-center 
                    rounded-full border-2 border-primary font-medium text-primary
                  '
            >
              {"G"}
            </span>
          )}
        </div>
        {/* is session */}
        <SignInButton />
      </div>
    </>
  );
};
