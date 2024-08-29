import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import NavbarSearch from "@/components/layout/navbar/navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import ProgressCheckout from "../../_component/progress-checkout";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 justify-center items-center">
          <BreadcrumbComponent items={[]} />
          <ProgressCheckout step2={true} step3={true} />
          <h1 className="font-semibold lg:text-5xl md:text-4xl text-3xl text-center tracking-wider mt-[40px]">
            Checkout Complete!
          </h1>
          <p className="text-gray-500 text-center lg:w-[600px] md:w-[400px] w-[320px] md:text-lg text-sm">
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
