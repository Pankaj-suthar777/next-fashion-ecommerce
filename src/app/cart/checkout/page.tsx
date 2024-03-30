import React from "react";
import ProgressCheckout from "../_component/ProgressCheckout";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import Form from "./_component/Form";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo
            items={[
              { href: "/cart", name: "Shopping Cart" },
              { href: "/cart/checkout", name: "Checkout" },
            ]}
          />
          <h1 className="font-semibold text-2xl text-center ">Checkout</h1>
        </div>
        <ProgressCheckout step2={true} />
        <Form />
      </div>
    </div>
  );
};

export default page;
