"use client";
import { addToCart, decreaseItemQty, removeFromCart } from "@/redux/cartSlice";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const CartProducts = () => {
  const cart = useSelector((state: any) => state.cart);
  const reversedCart: any = [...cart.cartItems].reverse();
  console.log(cart);
  return reversedCart.length > 0 ? (
    <div className="grid grid-cols-6 sm:mt-[80px] mt-[40px] overflow-x-auto overflow-y-auto min-w-[600px]">
      <div className="col-span-2 ">
        <p className="text-gray-500 lg:text-md text-sm">Product</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Quantity</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Price</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Total</p>
      </div>
      <div></div>
      <Separator className="col-span-6 my-8" />

      {reversedCart.map((item: any, index: number) => (
        <React.Fragment key={index}>
          <CartProduct item={item} />
          <Separator className="col-span-6 my-8" />
        </React.Fragment>
      ))}
    </div>
  ) : (
    <div className="flex mt-10 justify-center items-center">
      <Alert variant="destructive" className="flex gap-5">
        <i className="ri-information-line text-3xl"></i>
        <div>
          <AlertTitle>Cart is Empty</AlertTitle>
          <Link href="/productlist">
            <AlertDescription className="underline">
              Start Shopping
            </AlertDescription>
          </Link>
        </div>
      </Alert>
    </div>
  );
};

const CartProduct = ({
  item,
}: {
  item: {
    image: string;
    _id: string;
    quantity?: number;
    price: number;
    name: string;
    // total: number;
  };
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-span-2 flex items-center lg:gap-x-16 gap-x-6">
        <img
          alt=""
          src={item.image[0]}
          className="lg:h-[120px] lg:w-[120px] h-[70px] w-[70px] object-cover border border-gray-300"
        />
        <p className="lg:text-lg text-xs font-medium">
          {item.name.slice(0, 10)}
          {item.name.length > 10 ? "..." : ""}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          className="w-8 h-8  rounded-none bg-blue-100"
          onClick={() => dispatch(decreaseItemQty(item._id))}
        >
          <i className="ri-subtract-line"></i>
        </Button>
        <span className="w-10 h-8 flex justify-center items-center border border-black">
          {item.quantity}
        </span>
        <Button
          className="w-8 h-8 rounded-none"
          onClick={() => dispatch(addToCart(item))}
        >
          <i className="ri-add-line"></i>
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <p className="lg:text-lg text-sm font-medium">${item.price}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="lg:text-lg text-sm font-medium">
          ${item.price > 300 ? item.price + 100 : item.price}
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <div
          className="cursor-pointer border px-2"
          onClick={() => dispatch(removeFromCart(item._id))}
        >
          <i className="ri-close-line lg:text-2xl text-xl"></i>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
