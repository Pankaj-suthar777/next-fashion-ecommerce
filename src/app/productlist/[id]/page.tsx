import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProductImages from "./_component/ProductImages";
import SimiliarProductRow from "./_component/SimiliarProductRow";
import { ProductDetails } from "@/interfaces/Product";
import Product from "@/models/productModal";
import ProductAddToCartActions from "./_component/ProductAddToCartActions";

interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
  const productData = await Product.findById(params.id);
  const product: ProductDetails = JSON.parse(JSON.stringify(productData));
  return (
    <div className="w-screen flex flex-col justify-center mb-[40px] items-center ">
      <div className="xl:w-[80%] px-4 sm:px-10 md:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="lg:hidden block mt-[30px] pb-[40px]">
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
              <ProductAddToCartActions item={product} />
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
