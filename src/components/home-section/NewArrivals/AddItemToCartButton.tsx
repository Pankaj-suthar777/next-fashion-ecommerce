"use client";
import { addToCart } from "@/redux/cartSlice";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const AddItemToCartButton = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Button
      className="rounded-none mt-4 sm:text-lg text-xs"
      onClick={() => {
        dispatch(addToCart(item));
        router.push("/cart");
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddItemToCartButton;
