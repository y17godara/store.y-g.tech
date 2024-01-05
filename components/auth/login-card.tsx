"use client";

import React from "react";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { redirect, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCard } from "@/components/auth/auth-card";
import { login } from "@/actions/login";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";

export default function LoginCard() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (values: z.infer<typeof LoginSchema>) => {
    setSuccess("");
    setError("");

    // console.log("values", values); // debug
    try {
      startTransition(() => {
        login(values, callbackUrl)
          .then((data) => {
            if (data?.error) {
              form.reset();
              setError(data.error);
            }

            if (data?.success) {
              form.reset();
              setSuccess(data.success);
              redirect("/user/settings");
            }
          })
          .catch(() => setError("Something went wrong"));
      });
    } catch (err: any) {
      // console.log("err", err); // debug
      setError(err.message);
    }
  };

  return (
    <>
      <AuthCard
        header='Create an account'
        footer='Create an account?'
        footerLink='/auth/register'
        showSocials={true}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)} className='space-y-6'>
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete='off'
                        {...field}
                        placeholder='eric.doe1234@mail.com'
                        disabled={isPending}
                        // type='email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete='off'
                        {...field}
                        placeholder='********'
                        disabled={isPending}
                        type='password'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex w-full text-start'>
                <Button
                  variant='link'
                  className='px-0 font-normal'
                  size='sm'
                  asChild
                >
                  <Link href='/auth/forgot-password'>Forgot password?</Link>
                </Button>
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
      </AuthCard>
    </>
  );
}
