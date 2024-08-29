import NavbarSearch from "@/components/layout/navbar/navbar";
import React from "react";
import OrderTable from "./_component/order-table";
import BreadcrumbComponent from "@/components/layout/breadcrumb-component";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="home" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbComponent
            items={[{ href: "/admin/orders", name: "Orders" }]}
          />
        </div>
        <h1 className="text-3xl text-gray-700 text-semibold mt-10 mb-12">
          Orders
        </h1>
        <div className="overflow-y-auto sm:w-full w-[80vw]">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default page;
