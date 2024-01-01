"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/shadcn/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github" | "discord") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className='flex w-full items-center gap-x-2'>
      <Button
        size='lg'
        className='w-full gap-2'
        variant='outline'
        title={"Continue with Google"}
        onClick={() => onClick("google")}
      >
        <FcGoogle className='h-5 w-5' />
        <span className='hidden md:block'>Google</span>
      </Button>
      <Button
        size='lg'
        className='w-full gap-2'
        variant='outline'
        title={"Continue with Github"}
        onClick={() => onClick("github")}
      >
        <FaGithub className='h-5 w-5' />
        <span className='hidden md:block'>Github</span>
      </Button>
      {/* X */}
      <Button
        size='lg'
        className='w-full gap-2'
        variant='outline'
        title={"Continue with Discord"}
        onClick={() => onClick("discord")}
      >
        <FaDiscord className='h-5 w-5 text-[#7289da]' />
        <span className='hidden md:block'>Discord</span>
      </Button>
    </div>
  );
};
