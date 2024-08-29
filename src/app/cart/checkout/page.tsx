import React from "react";
import ProgressCheckout from "../_component/progress-checkout";
import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import NavbarSearch from "@/components/layout/navbar/navbar";
import Form from "./_component/form";

const page = () => {
  return (
    <div className="flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbComponent
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
