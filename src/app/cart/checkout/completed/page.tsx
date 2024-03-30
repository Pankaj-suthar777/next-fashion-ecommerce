import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import ProgressCheckout from "../../_component/ProgressCheckout";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 justify-center items-center">
          <BreadcrumbDemo items={[]} />
          <ProgressCheckout step2={true} step3={true} />
          <h1 className="font-semibold text-5xl text-center tracking-wider mt-[40px]">
            Checkout Complete!
          </h1>
          <p className="text-gray-500 text-center w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quia neque eius perferendis blanditiis facere modi vitae.
          </p>
          <Button className="px-12 py-5 rounded-none mt-[24px]">
            Go To Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
