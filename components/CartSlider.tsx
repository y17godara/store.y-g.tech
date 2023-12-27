/* eslint-disable @next/next/no-img-element */
"use client";

import { BsCart4 } from "react-icons/bs";
import { Button } from "./motion/button";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "./ui";
import { useSelector } from "react-redux";
import { selectCartCount } from "@/redux/features/cart/cartSlice";
import Image from "next/image";

export function CartSlider() {
  const [open, setOpen] = useState<boolean>(false);
  const count: number = useSelector(selectCartCount);

  const formatCount = (count: number) => (count > 9 ? "9+" : count); // format count to 9+ if count is greater than 9

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative flex flex-col items-center justify-center space-y-3'>
          <Button
            className={cn(
              "text-secoundary relative flex h-8 w-8 cursor-default items-center justify-center rounded-full text-secondary hover:text-primary focus:outline-none focus:ring-0 focus-visible:outline-none"
            )}
            onClick={() => setOpen(true)}
          >
            <BsCart4 title={"Main Site"} className='h-5 w-5' />
          </Button>
          {/* Cart Items No. */}
          <span className='absolute -right-0 -top-1 rounded-full bg-secondary px-[2px] text-xs text-primary'>
            {formatCount(count)}
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
                    {/* Header */}
                    <div className='flex h-full flex-col divide-y divide-secondary border-l-[1px] border-secondary bg-primary shadow-xl'>
                      <div className='flex min-h-0 flex-col py-3'>
                        <div className='px-4 sm:px-6'>
                          <div className='flex flex-col items-center gap-y-16'>
                            <div className='flex w-full flex-row items-center justify-between'>
                              <Dialog.Title className='text-base font-semibold leading-6 text-primary'>
                                Shopping cart
                              </Dialog.Title>
                              <div className='flex h-8 items-center'>
                                <button
                                  type='button'
                                  className='relative rounded-md focus:outline-none focus:ring-0 focus-visible:outline-none '
                                  onClick={() => setOpen(false)}
                                >
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
                      {/* Cart */}
                      <div
                        className={cn(
                          "flex h-full flex-1 flex-col items-center justify-center gap-y-2",
                          count > 0 ? "overflow-y-scroll" : ""
                        )}
                      >
                        {count > 0 ? (
                          <>
                            <div className='flex flex-col items-center justify-center gap-y-2 px-4'>
                              <h2 className='text-lg font-semibold text-primary'>
                                Your cart is Filled with {count} items
                              </h2>
                              <div>
                                {/* Cart Items */}
                                {/* <CartItem /> */}
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='flex flex-col items-center justify-center gap-y-2 px-4'>
                              <img
                                src='/assets/components/empty-cart.png'
                                alt='Empty Cart'
                                className='h-32 w-32'
                                loading='lazy'
                              />
                              <h2 className='text-lg font-semibold text-primary'>
                                Your cart is empty
                              </h2>
                              <p className='text-sm text-primary'>
                                Looks like you havent added any items to your
                                cart yet.
                              </p>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-y-2 px-4'>
                              <Link
                                className='relative w-full rounded-md bg-secondary px-2 py-1 text-primary focus:outline-none focus:ring-0 focus-visible:outline-none'
                                href={"/products"}
                              >
                                Shop now
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                      {/* Checkout */}
                      <div className='flex h-32 w-full flex-row items-center justify-between p-4 sm:h-auto'>
                        <div className='flex h-8 w-full flex-col items-center gap-y-2 sm:flex-row'>
                          <div className='flex w-full flex-row items-center justify-between'>
                            <Dialog.Title className='text-base font-semibold leading-6 text-primary'>
                              Subtotal ({count} items) :
                            </Dialog.Title>
                          </div>
                          <Button
                            type='button'
                            className='relative w-full rounded-md bg-secondary px-2 py-1 text-primary focus:outline-none focus:ring-0 focus-visible:outline-none'
                            onClick={() => console.log("Checkout Clicked")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            disabled={count > 0 ? false : true}
                          >
                            Process to checkout
                          </Button>
                        </div>
                      </div>
                      {/* footer */}
                      <div className='flex h-2 w-full'></div>
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

const CartItem = ({
  image,
  name,
  company,
  description,
  price,
  discount,
  productId,
  handleInc,
}: {
  image: string;
  name: string;
  company: string;
  description: string;
  price: number;
  discount: number;
  productId: string;
  handleInc: (productId: string) => () => void;
}) => {
  return (
    <>
      <li className='border-tertiary flex min-h-32 flex-row gap-4 rounded-md border px-2 py-4'>
        <div className='relative h-48 w-48 overflow-hidden rounded-md'>
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className={cn(`rounded-md
                transition-all duration-300 hover:scale-105
              `)}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className='flex h-full w-full flex-1 gap-x-4 pt-2 text-start text-xs'>
          <div className='flex flex-col gap-2'>
            <div>
              <p className='line-clamp-1 text-lg font-bold'>{name}</p>
              {company === "unknown" ? null : (
                <p className='line-clamp-1 text-sm underline underline-offset-2'>
                  {company}
                </p>
              )}
            </div>
            <p className='line-clamp-3 text-base'>{description}</p>

            <div className='flex flex-row gap-2'>
              <p className='text-lg font-bold text-primary'>${price}</p>
              <p className='text-sm text-gray-400 line-through'>
                ${Math.round(price / (1 - discount / 100))}
              </p>

              <p className='text-sm text-gray-400'>{discount}% off</p>
            </div>

            <div className='flex flex-row gap-2'>
              <button
                className='text-sm text-gray-400 underline'
                onClick={handleInc(productId)}
              >
                Add to cart
              </button>
              <button className='text-sm text-gray-400 underline'>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
