import React from "react";
import { InputWithButton } from "./InputWithButton";
import { Button } from "./ui/button";

const NavbarSearch = ({ type }) => {
  return (
    <nav className=" text-black py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold w-[148.4px]">
          {/* Your logo component */}
          Logo
        </div>
        <div className="items-center md:flex hidden">
          {/* Search bar */}
          {/* <InputWithButton /> */}
        </div>
        <div className="flex items-center gap-x-4">
          <i className="ri-shopping-cart-2-line text-2xl text-black"></i>
          <i className="ri-notification-2-line text-2xl text-black"></i>
          <Button className="rounded-none">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
