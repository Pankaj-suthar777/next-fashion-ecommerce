import NavbarSearch from "@/components/Navbar";
import React from "react";
import OrderTable from "./_component/OrderTable";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="home" />
        <h1 className="text-3xl text-gray-700 text-semibold">Orders</h1>
        <OrderTable />
      </div>
    </div>
  );
};

export default page;
