import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Button } from "./motion/button";

export const Cart = () => {
  const handleCart = () => {
    console.log("Cart");
  };
  return (
    <>
      <Button
        className='ml-4 text-primary'
        onClick={handleCart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsCart4 title={"Main Site"} className='h-5 w-5' />
      </Button>
    </>
  );
};
