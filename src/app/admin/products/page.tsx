import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import NavbarSearch from "@/components/layout/navbar/navbar";
import React from "react";
import Product from "@/models/productModal";
import { connectDB } from "@/config/dbConfig";
import ProductActions from "./_component/product-actions";
connectDB();

const page = async () => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-2 xl:px-12 mb-8">
        <NavbarSearch type="home" />

        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbComponent
            items={[{ href: "/admin/products", name: "Products" }]}
          />
        </div>
        <ProductActions products={JSON.parse(JSON.stringify(products))} />
      </div>
    </div>
  );
};

export default page;
