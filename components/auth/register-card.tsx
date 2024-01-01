"use client";

import React from "react";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCard } from "@/components/auth/auth-card";
import { register } from "@/actions/register";
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
// import { FormError } from "@/components/ui/form-error";
// import { FormSuccess } from "@/components/ui/form-success";

export default function RegisterCard() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");

    console.log("values", values); // debug
    try {
      startTransition(() => {
        register(values).then((data: any) => {
          console.log("data", data); // debug
          setError(data.error);
          setSuccess(data.success);
        });
      });
    } catch (err: any) {
      console.log("err", err); // debug
      setError(err.message);
    }
  };

  return (
    <>
      <AuthCard
        header='Create an account'
        footer='Already have an account?'
        footerLink='/auth/login'
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
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete='off'
                        {...field}
                        placeholder='Eric Doe'
                        disabled={isPending}
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
            </div>
            {/* <FormError message={error} /> */}
            {/* <FormSuccess message={success} /> */}
            <Button disabled={isPending} type='submit' className='w-full'>
              Create an account
            </Button>
          </form>
        </Form>
      </AuthCard>
    </>
  );
}
