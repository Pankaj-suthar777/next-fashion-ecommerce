import React from "react";
import { InputWithButton } from "./InputWithButton";
import { Button } from "./ui/button";
import NavTabs from "./NavTabs";
import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";

const NavbarSearch = ({ type }: { type: string }) => {
  return (
    <nav className="text-black py-4 overscroll-x-none">
      <div className="max-w-6xl  mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold w-[148px] cursor-pointer">
          {/* Your logo component */}
          <Link href="/">Logo</Link>
        </div>
        <div className="items-center md:flex hidden">
          {/* Search bar */}
          <div className="xl:block hidden">
            {type === "search" && <InputWithButton />}
          </div>
          {type === "home" && <NavTabs />}
        </div>
        <div className="flex items-center gap-x-6">
          <div className="xl:hidden block">
            <i className="ri-search-line text-xl text-black cursor-pointer"></i>
          </div>

          <Link href="/cart">
            <i className="ri-shopping-cart-2-line text-xl text-black cursor-pointer"></i>
          </Link>
          <i className="ri-notification-2-line text-xl text-black cursor-pointer"></i>
          {/* <Button className="rounded-none text-xs cursor-pointer">Login</Button> */}
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
