"use client";

import { useState } from "react";
import { type ProductProps } from "../[slug]/page";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import {
  incrementProduct,
  decrementProduct,
} from "@/redux/features/cart/cartSlice";
import { handleFavProduct } from "@/redux/features/favProduct/favProductSlice";
import { FaHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export const DetailsFooter = ({ product }: { product: ProductProps }) => {
  const {
    id,
    productId,
    name,
    description,
    price,
    ratings,
    discount,
    featuredImage,
    category,
    company,
    addedBy,
  } = product;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(1);

  const handleInc = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDec = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity < 0) return;

    // add
    dispatch(
      incrementProduct({
        id,
        productId,
        name,
        description,
        price,
        ratings,
        discount,
        featuredImage,
        category,
        company,
        addedBy,
        quantity,
      })
    );
    setQuantity(1);
  };

  const productCount = useSelector((state: any) => state.cart.items[productId]);

  const handleFav = (productId: string) => () => {
    dispatch(handleFavProduct(productId));
  };

  const favProduct = useSelector(
    (state: any) => state.favProduct.items[productId]
  );

  return (
    <>
      <section className='flex h-full w-full flex-col gap-y-2 py-4'>
        <div className='flex h-full w-full flex-col justify-between gap-2 py-4'>
          <p className='text-sm text-primary'>Quantity:</p>
          <div className='flex h-full w-full flex-row items-center justify-between '>
            {/* Quntiy input with + and - */}
            <div className='flex w-auto flex-col items-center justify-center text-center'>
              <div className='flex flex-row items-center justify-center text-center'>
                <button
                  className='
                    rounded-md border
                    border-secondary
                    px-2
                    py-1
                    text-sm
                    font-semibold
                    text-secondary
                    hover:bg-secondary
                    hover:text-white
                '
                  onClick={handleInc}
                >
                  +
                </button>

                <p className='w-8 px-1 text-sm text-primary sm:w-10'>
                  {quantity}
                </p>

                <button
                  className='
                    rounded-md border
                    border-secondary
                    px-2
                    py-1
                    text-sm
                    font-semibold
                    text-secondary
                    hover:bg-secondary
                    hover:text-white
                '
                  onClick={handleDec}
                >
                  -
                </button>
              </div>
            </div>

            <div>
              <p className='text-sm text-primary sm:text-lg'>
                ${(price * quantity).toFixed(2)}
              </p>
            </div>

            {/* Add to cart button */}
            <button
              className='line-clamp-1 inline-flex items-center justify-center rounded-md border border-secondary px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-white'
              onClick={() => addToCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className='flex h-full w-full flex-col justify-between gap-2 py-4 sm:flex-row'>
          <button
            title={favProduct ? "Remove from favourites" : "Add to favourites"}
            className='line-clamp-1 inline-flex h-full items-center justify-center gap-2 rounded-md border border-secondary px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-white sm:w-full'
            onClick={handleFav(productId)}
          >
            <span>Favorite</span>
            <FaHeart
              size={14}
              className={cn(
                "hover:text-red-600",
                favProduct ? "text-red-600" : "text-tertiary"
              )}
            />
          </button>
          <button
            className='line-clamp-1 inline-flex items-center justify-center rounded-md border border-secondary px-4 py-2 text-xs font-semibold text-secondary hover:bg-secondary hover:text-white sm:w-full'
            onClick={() => console.log("Buy Now")}
          >
            <span>Buy Now</span>
          </button>
        </div>
      </section>
    </>
  );
};
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram, IoCopyOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export const ShareButtons = ({ productId }: { productId: string }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center gap-2'>
        {ShareButton.map((button) => (
          <>
            <button
              key={button.id}
              className='border-1 flex flex-row gap-1 rounded-r-md border border-secondary pr-1 text-sm font-semibold text-primary hover:text-secondary'
              title='Share'
              onClick={button.onClick}
            >
              {button.icon} {button.name}
            </button>
          </>
        ))}
      </div>
    </>
  );
};

const ShareButton: {
  id: number;
  name: string;
  icon: JSX.Element;
  onClick: () => void;
}[] = [
  {
    id: 1,
    name: "Copy",
    icon: <IoCopyOutline size={18} />,
    onClick: () => {
      const tostNoti = "Link copied to clipboard";
      navigator.clipboard.writeText(window.location.href);
    },
  },
  {
    id: 2,
    name: "Facebook",
    icon: <BsFacebook size={18} />,
    onClick: () => {
      const tostNoti = "Link copied to clipboard";
      window.open(
        `https://twitter.com/intent/tweet?text=hello world&via=y17godara`,
        "_blank"
      );
    },
  },
  {
    id: 3,
    name: "X",
    icon: <FaSquareXTwitter size={18} />,
    onClick: () => {
      const tostNoti = "Link copied to clipboard";
      window.open(
        `https://twitter.com/intent/tweet?text=hello world&via=y17godara`,
        "_blank"
      );
    },
  },
  {
    id: 4,
    name: "Whatsapp",
    icon: <IoLogoWhatsapp size={18} />,
    onClick: () => {
      const tostNoti = "Link copied to clipboard";
      navigator.clipboard.writeText(window.location.href);
    },
  },
  {
    id: 5,
    name: "Instagram",
    icon: <IoLogoInstagram size={18} />,
    onClick: () => {
      const tostNoti = "Link copied to clipboard";
      navigator.clipboard.writeText(window.location.href);
    },
  },
];
