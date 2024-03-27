import React from "react";
import { InputWithButton } from "./InputWithButton";
import { Button } from "./ui/button";
import NavTabs from "./NavTabs";

const NavbarSearch = ({ type }: { type: string }) => {
  return (
    <nav className="text-black py-4 overscroll-x-none">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold w-[148.4px]">
          {/* Your logo component */}
          Logo
        </div>
        <div className="items-center md:flex hidden">
          {/* Search bar */}
          {type === "search" && <InputWithButton />}
          {type === "home" && <NavTabs />}
        </div>
        <div className="flex items-center gap-x-6">
          <i className="ri-shopping-cart-2-line text-xl text-black"></i>
          <i className="ri-notification-2-line text-xl text-black"></i>
          <Button className="rounded-none text-xs">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
