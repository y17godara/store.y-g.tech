"use client";

import * as z from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { SettingsSchema } from "@/schemas";
import { CardHeader, CardContent } from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";
import { settings } from "@/actions/settings";
import Link from "next/link";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { useCurrentUser } from "@/hooks/currentUser";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";
import { UserAvatar } from "@/components/ui/avatar";

export const ProfileSettings = () => {
  const user: any = useCurrentUser();

  const { update } = useSession();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [pswdVisible, setPswdVisible] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: "" || undefined,
      newPassword: "" || undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      image: user?.image || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const togglePswdVisibility = () => {
    setPswdVisible(!pswdVisible);
  };

  return (
    <>
      <CardHeader>
        <div className='relative flex h-full w-full flex-col gap-x-6 gap-y-6 sm:flex-row md:gap-x-10'>
          <UserAvatar
            name={user?.name}
            image={user?.image}
            className='h-32 w-32'
          />
          <div className='flex flex-1 flex-col justify-center gap-1'>
            <h6 className='text-wrap text-base font-semibold text-secondary '>
              _id: <span className='text-base font-normal '> {user.id}</span>
            </h6>
            <h2 className='text-wrap text-base font-semibold text-secondary '>
              Name: <span className='text-base font-normal '> {user.name}</span>
            </h2>
            <p className='text-wrap text-base font-semibold text-secondary '>
              Email:{" "}
              <span className='text-base font-normal '> {user.email}</span>
            </p>
            <p className='text-wrap text-base font-semibold text-secondary '>
              Avatar:{" "}
              {user.image ? (
                <>
                  <Link
                    href={user.image}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-base font-normal underline hover:text-brand'
                  >
                    {" "}
                    {user.image}
                  </Link>
                </>
              ) : (
                <>
                  <span className='text-base font-normal '>
                    :C no Avatar found!
                  </span>
                </>
              )}
            </p>
            <p className='text-base font-semibold text-secondary' text-wrap>
              Role: <span className='text-base font-normal '>{user.role} </span>
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='John Doe'
                        disabled={isPending}
                        autoComplete={"name"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Avatar URL */}
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='https://example.com/avatar.png'
                        disabled={isPending}
                        autoComplete={"url"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {user?.isOAuth === false && (
                <>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='john.doe@example.com'
                            type='email'
                            disabled={isPending}
                            autoComplete={"email"}
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
                          <>
                            <div className='relative flex w-full'>
                              <Input
                                {...field}
                                placeholder='******'
                                type={pswdVisible ? "text" : "password"}
                                disabled={isPending}
                                autoComplete='password'
                              />
                              <span
                                className='absolute right-2.5 top-3 cursor-pointer text-secondary'
                                onClick={() => setPswdVisible(!pswdVisible)}
                              >
                                {pswdVisible ? <FaEyeSlash /> : <FaEye />}
                              </span>
                            </div>
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='newPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <>
                            <div className='relative flex w-full'>
                              <Input
                                {...field}
                                placeholder='******'
                                type={pswdVisible ? "text" : "password"}
                                disabled={isPending}
                                autoComplete='new-password'
                              />
                              <span
                                className='absolute right-2.5 top-3 cursor-pointer text-secondary'
                                onClick={() => setPswdVisible(!pswdVisible)}
                              >
                                {pswdVisible ? <FaEyeSlash /> : <FaEye />}
                              </span>
                            </div>
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className='flex flex-col justify-end gap-x-2 gap-y-4 sm:flex-row'>
              <Button disabled={isPending} type='submit'>
                Save Changes
              </Button>
              <Button
                type='button'
                disabled={isPending}
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </>
  );
};
