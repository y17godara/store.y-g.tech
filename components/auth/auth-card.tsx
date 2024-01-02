"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/ui/card";
import { Social } from "@/components/auth/socials";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";

interface AuthCardProps {
  children: React.ReactNode;
  header: string;
  footer: string;
  footerLink: string;
  showSocials?: boolean;
}

export function AuthCard({
  children,
  header,
  footer,
  footerLink,
  showSocials,
}: AuthCardProps) {
  return (
    <Card className='w-[400px] shadow-md md:w-[550px]'>
      <CardHeader>
        <div className='flex w-full flex-col items-center justify-center gap-y-4'>
          <h1 className={cn("text-3xl font-semibold")}>store.y-g.tech</h1>
          <p className='text-muted-foreground text-lg'>{header}</p>
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardContent>{showSocials ? <Social /> : null}</CardContent>

      <CardFooter>
        <Button variant='link' className='w-full font-normal' size='sm' asChild>
          <Link href={footerLink}>{footer}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
