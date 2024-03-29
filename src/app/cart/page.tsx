import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/NavbarSearch";
import React from "react";
import ProgressCheckout from "./_component/ProgressCheckout";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo items={[{ href: "/cart", name: "Shopping Cart" }]} />
          <h1 className="font-bold text-xl text-center tracking-wider">
            Shopping Cart
          </h1>
        </div>
        <ProgressCheckout />
      </div>
    </div>
  );
};

export default page;
