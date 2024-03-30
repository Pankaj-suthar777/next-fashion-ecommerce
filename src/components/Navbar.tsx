import React from "react";
import { InputWithButton } from "./InputWithButton";
import { Button } from "./ui/button";
import NavTabs from "./NavTabs";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarSearch = ({ type }: { type: string }) => {
  return (
    <nav className="text-black py-4 overscroll-x-none">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold w-[148px] cursor-pointer">
          {/* Your logo component */}
          <Link href="/">Logo</Link>
        </div>
        <div className="items-center md:flex hidden">
          {/* Search bar */}
          {type === "search" && <InputWithButton />}
          {type === "home" && <NavTabs />}
        </div>
        <div className="flex items-center gap-x-6">
          {type !== "search" && (
            <i className="ri-search-line text-xl text-black cursor-pointer"></i>
          )}
          <Link href="/cart">
            <i className="ri-shopping-cart-2-line text-xl text-black cursor-pointer"></i>
          </Link>
          <i className="ri-notification-2-line text-xl text-black cursor-pointer"></i>
          {/* <Button className="rounded-none text-xs cursor-pointer">Login</Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
