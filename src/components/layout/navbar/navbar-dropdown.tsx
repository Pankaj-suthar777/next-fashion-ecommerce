"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signOut } from "next-auth/react";

const NavbarDropdown = () => {
  const router = useRouter();

  async function logoutHandler() {
    signOut();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        <Avatar className="cursor-pointer h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.push("/admin/profile")}
          className="cursor-pointer"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/admin/products")}
          className="cursor-pointer"
        >
          Products
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => router.push("/orders")}
        >
          Orders
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => logoutHandler()}
        >
          Logout
        </DropdownMenuItem>
        {/* <DropdownMenuItem className="cursor-pointer">
          <ModeToggle />
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
