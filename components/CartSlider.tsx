/* eslint-disable @next/next/no-img-element */
"use client";

import { BsCart4 } from "react-icons/bs";
import { Button } from "./motion/button";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";

export function CartSlider() {
  const [open, setOpen] = useState<boolean>(false);

  const count = 0;
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative flex flex-col items-center justify-center space-y-3'>
          <Button
            className={cn(
              "text-secoundary relative flex h-8 w-8 cursor-default items-center justify-center rounded-full text-secondary hover:text-primary focus:outline-none focus:ring-0 focus-visible:outline-none"
            )}
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsCart4 title={"Main Site"} className='h-5 w-5' />
          </Button>
          {/* Cart Items No. */}
          <span className='absolute -right-0 -top-1 rounded-full bg-secondary px-[2px] text-xs text-primary'>
            {count}
          </span>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <div className='fixed inset-0' />

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                    <div className='flex h-full flex-col divide-y divide-gray-600 border-l-[1px] border-secondary bg-primary shadow-xl'>
                      <div className='flex min-h-0 flex-1 flex-col overflow-y-scroll py-3'>
                        <div className='px-4 sm:px-6'>
                          <div className='flex items-center justify-between'>
                            <Dialog.Title className='text-base font-semibold leading-6 text-primary'>
                              Shopping cart
                            </Dialog.Title>
                            <div className='ml-3 flex h-8 items-center'>
                              <button
                                type='button'
                                className='relative rounded-md focus:outline-none focus:ring-0 focus-visible:outline-none '
                                onClick={() => setOpen(false)}
                              >
                                {/* <span className='absolute -inset-2.5' />
                                <span className='sr-only'>Close panel</span> */}
                                <XMarkIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
