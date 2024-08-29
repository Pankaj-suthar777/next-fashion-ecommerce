"use client";
import React, { useState } from "react";
import InputWithButton from "../input-with-button";
// import { Button } from "./ui/button";
import NavTabs from "./nav-tabs";
import Link from "next/link";
import NavbarDropdown from "./navbar-dropdown";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../../ui/input";
import NotificationDropDown from "../../NotificationDropDown";
type type = "home" | "search";

const NavbarSearch = ({ type }: { type: type }) => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const handleAlertDialogClose = () => {
    setIsAlertDialogOpen(false);
  };

  const handleAlertDialogOpen = () => {
    setIsAlertDialogOpen(true);
  };

  return (
    <nav
      className={`text-black py-4 overscroll-x-none ${
        isAlertDialogOpen ? "blur" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
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
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="xl:hidden block">
                <i
                  className="ri-search-line text-xl text-black cursor-pointer"
                  onClick={handleAlertDialogOpen}
                ></i>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[50vw] w-[90vw] rounded-xl">
              <AlertDialogHeader>
                <AlertDialogTitle>Search Product</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input placeholder="search" />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <div className="flex justify-end items-center gap-x-4">
                  <div>
                    <AlertDialogCancel
                      className="mt-0"
                      onClick={handleAlertDialogClose}
                    >
                      Cancel
                    </AlertDialogCancel>
                  </div>
                  <div>
                    <AlertDialogAction onClick={handleAlertDialogClose}>
                      Search
                    </AlertDialogAction>
                  </div>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Link href="/cart">
            <i className="ri-shopping-cart-2-line text-xl text-black cursor-pointer"></i>
          </Link>

          <NotificationDropDown />

          {/* <Button className="rounded-none text-xs cursor-pointer">Login</Button> */}
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSearch;
