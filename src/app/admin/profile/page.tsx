import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="home" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo
            items={[{ href: "/productlist", name: "Product List" }]}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
