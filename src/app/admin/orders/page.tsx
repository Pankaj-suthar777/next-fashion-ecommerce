import NavbarSearch from "@/components/Navbar";
import React from "react";
import OrderTable from "./_component/OrderTable";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="home" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo items={[{ href: "/admin/orders", name: "Orders" }]} />
        </div>
        <h1 className="text-3xl text-gray-700 text-semibold mt-10 mb-12">
          Orders
        </h1>
        <OrderTable />
      </div>
    </div>
  );
};

export default page;
