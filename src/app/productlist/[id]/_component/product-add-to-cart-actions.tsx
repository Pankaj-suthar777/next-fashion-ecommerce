"use client";
import { addToCart } from "@/redux/cartSlice";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ProductAddToCartActions = ({ item }: { item: any }) => {
  const [qty, setQty] = useState(1);
  const dispacth = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      dispacth(addToCart(item));
    }
    router.push("/cart");
  };

  return (
    <>
      <div className="flex items-center pt-5 lg:pb-0 pb-5">
        <span className="mr-4">Quantity</span>
        <Button
          variant="outline"
          className="w-8 h-8 rounded-none  bg-blue-100"
          onClick={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        >
          <i className="ri-subtract-line"></i>
        </Button>
        <span className="w-10 h-8 flex justify-center items-center border border-black">
          {qty}
        </span>
        <Button
          className="w-8 h-8 rounded-none"
          onClick={() => {
            setQty(qty + 1);
          }}
        >
          <i className="ri-add-line"></i>
        </Button>
      </div>
      <Button
        className="flex items-center rounded-none px-[32px] py-[22px]"
        onClick={handleAddToCart}
      >
        Add to Cart <i className="ri-shopping-cart-2-line text-xl ml-4"></i>
      </Button>
    </>
  );
};

export default ProductAddToCartActions;
