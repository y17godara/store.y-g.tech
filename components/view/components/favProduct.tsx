import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { handleFavProduct } from "@/redux/features/favProduct/favProductSlice";

const FavProduct = ({ productId }: { productId: string }) => {
  const dispatch = useDispatch();

  const handleFav = (productId: string) => () => {
    dispatch(handleFavProduct(productId));
  };

  const favProduct = useSelector(
    (state: any) => state.favProduct.items[productId]
  );

  return (
    <>
      <button
        title={favProduct ? "Remove from favourites" : "Add to favourites"}
        className={cn(
          "mt-1 hover:text-red-600",
          favProduct ? "text-red-600" : "text-tertiary"
        )}
        onClick={handleFav(productId)}
      >
        <FaHeart size={18} />
      </button>
    </>
  );
};

export default FavProduct;
