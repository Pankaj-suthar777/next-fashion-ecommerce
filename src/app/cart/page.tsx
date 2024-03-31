import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import React from "react";
import ProgressCheckout from "./_component/ProgressCheckout";
import CartProducts from "./_component/CartProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo items={[{ href: "/cart", name: "Shopping Cart" }]} />
          <h1 className="font-semibold lg:text-2xl text-lg text-center tracking-wider">
            Shopping Cart
          </h1>
        </div>
        <ProgressCheckout />
        <div className="overflow-y-scroll overflow-auto xl:w-[75vw] w-[90vw]">
          <CartProducts />
        </div>
        <div className="flex flex-col justify-center items-end space-y-2 sm:mt-0 mt-5">
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-2xl font-bold">$200</p>
        </div>
        <div className="flex justify-end items-center sm:gap-x-8 gap-x-4 sm:mt-14 mt-7">
          <Button
            variant="outline"
            className="rounded-none border border-black px-4"
          >
            Continue Shopping
          </Button>
          <Link href="/cart/checkout">
            <Button className="rounded-none px-8 border border-black">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
