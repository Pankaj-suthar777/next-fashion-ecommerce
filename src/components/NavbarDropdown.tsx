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

const NavbarDropdown = () => {
  const route = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => route.push("/admin/profile")}
          className="cursor-pointer"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => route.push("/admin/products")}
          className="cursor-pointer"
        >
          Products
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => route.push("/admin/orders")}
        >
          Orders
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => route.push("/admin/report")}
        >
          Report
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => route.push("/admin/users")}
        >
          Users
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
