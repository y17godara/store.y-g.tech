"use client";

import React from "react";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCartCount,
} from "@/redux/features/cart/cartSlice";

function Temp() {
  const count: number = useSelector(selectCartCount);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className='flex flex-row items-center justify-center gap-x-2 text-center'>
        <button
          className='
         bg-tertiary p-2
        '
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <p className='w-10 bg-primary'>{count}</p>
        <button
          className='
         bg-tertiary p-2
        '
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Temp;
