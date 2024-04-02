import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProductImages from "./_component/ProductImages";
import SimiliarProductRow from "./_component/SimiliarProductRow";
import { ProductDetails } from "@/interfaces/Product";
import Product from "@/models/productModal";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
  const product: ProductDetails = (await Product.findById(params.id)) as any;

  return (
    <div className="w-screen flex flex-col justify-center mb-[40px] items-center">
      <div className="xl:w-[80%] px-4 sm:px-10 md:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="lg:hidden block mt-[30px]">
          <BreadcrumbDemo
            items={[{ href: "/productlist", name: "Product List" }]}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[60px] mt-0">
          <ProductImages images={product.image} />
          <div>
            <div className="lg:block hidden">
              <BreadcrumbDemo
                items={[{ href: "/productlist", name: "Product List" }]}
              />
            </div>
            <div className="lg:mt-8 mt-16 lg:space-y-8 space-y-4">
              <h1 className="sm:text-4xl text-xl font-bold">{product.name}</h1>
              <p className="text-gray-500 text-xl">${product.price}</p>
              <Separator />
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex items-center pt-5 lg:pb-0 pb-5">
                <span className="mr-4">Quantity</span>
                <Button
                  variant="outline"
                  className="w-8 h-8 rounded-none  bg-blue-100"
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
        <div className="lg:mt-[100px] mt-[70px]">
          <SimiliarProductRow product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
