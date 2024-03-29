import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/NavbarSearch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProductImages from "./_component/ProductImages";
import SimiliarProductRow from "./_component/SimiliarProductRow";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[40px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="grid grid-cols-2 h-[60vh] mt-[60px]">
          <ProductImages />
          <div className="">
            <BreadcrumbDemo
              items={[{ href: "/productlist", name: "Product List" }]}
            />
            <div className="mt-8 space-y-8">
              <h1 className="text-4xl font-bold">Purple Warm Zip Jacket</h1>
              <p className="text-gray-500 text-xl">$555</p>
              <Separator />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quas officiis ducimus error itaque quo eaque, id earum officia
                sed. Dicta ipsum et natus doloribus, sapiente officia tempora
                quo facilis voluptatum architecto quod delectus nemo.
              </p>
              <div className="flex items-center pt-5">
                <span className="mr-4">Quantity</span>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-none bg-blue-100"
                >
                  <i className="ri-subtract-line"></i>
                </Button>
                <span className="w-10 h-8 flex justify-center items-center border border-black">
                  1
                </span>
                <Button className="w-8 h-8 rounded-none">
                  <i className="ri-add-line"></i>
                </Button>
              </div>
              <Button className="flex items-center rounded-none px-[32px] py-[22px]">
                Add to Cart{" "}
                <i className="ri-shopping-cart-2-line text-xl ml-4"></i>
              </Button>
            </div>
          </div>
        </div>
        <SimiliarProductRow />
      </div>
    </div>
  );
};

export default page;
