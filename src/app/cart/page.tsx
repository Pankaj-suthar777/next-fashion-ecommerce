import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import NavbarSearch from "@/components/layout/navbar/navbar";
import React from "react";
import ProgressCheckout from "./_component/progress-checkout";
import CartProducts from "./_component/cart-products";
import CartPayAndPrice from "./_component/cart-pay-and-price";

const page = () => {
  return (
    <div>
      <NavbarSearch type="search" />
      <div className="flex flex-col justify-center mb-[100px] items-center w-full">
        <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
          <div className="flex flex-col gap-y-8 mt-10 ">
            <BreadcrumbComponent
              items={[{ href: "/cart", name: "Shopping Cart" }]}
            />
            <h1 className="font-semibold lg:text-2xl text-lg text-center tracking-wider">
              Shopping Cart
            </h1>
          </div>
          <ProgressCheckout />
          <div className="overflow-overflow">
            <CartProducts />
          </div>
          <div>
            <CartPayAndPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
