"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartPayAndPrice = () => {
  const cart = useSelector((state: any) => state.cart);

  return cart.cartItems.length !== 0 ? (
    <div>
      <div>
        <div className="flex flex-col justify-center items-end space-y-2 sm:mt-0 mt-5">
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-2xl font-bold">${cart?.totalPrice}</p>
        </div>
        <div className="flex justify-end items-center sm:gap-x-8 gap-x-4 sm:mt-14 mt-7">
          <Link href="/productlist">
            <Button
              variant="outline"
              className="rounded-none border border-black px-4"
            >
              Continue Shopping
            </Button>
          </Link>
          <Link href="/cart/checkout">
            <Button className="rounded-none px-8 border border-black">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default CartPayAndPrice;
