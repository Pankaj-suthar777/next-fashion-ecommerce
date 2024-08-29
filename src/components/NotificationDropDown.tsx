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
// import { ModeToggle } from "./ModeToogle";

const NotificationDropDown = () => {
  const router = useRouter();

  async function logoutHandler() {
    await axios.post("/api/auth/logout");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        <i className="ri-notification-2-line text-xl text-black cursor-pointer"></i>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.push("/admin/profile")}
          className="cursor-pointer"
        >
          <div className="max-w-sm bg-gray-200 p-3 rounded-md flex items-center justify-center relative">
            <button className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col ">
              <div className="text-xs text-black mb-1">Samuel Abera</div>
              <p className="text-[10px] text-black w-full">
                Lorem ipsum dolor sit amets consectetur
              </p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/admin/profile")}
          className="cursor-pointer"
        >
          <div className="max-w-sm bg-gray-200 p-3 rounded-md flex items-center justify-center relative">
            <button className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col ">
              <div className="text-xs text-black mb-1">Samuel Abera</div>
              <p className="text-[10px] text-black w-full">
                Lorem ipsum dolor sit amets consectetur
              </p>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push("/admin/profile")}
          className="cursor-pointer"
        >
          <div className="max-w-sm bg-gray-200 p-3 rounded-md flex items-center justify-center relative">
            <button className="absolute p-1 bg-gray-100 border border-gray-300 rounded-full -top-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col ">
              <div className="text-xs text-black mb-1">Samuel Abera</div>
              <p className="text-[10px] text-black w-full">
                Lorem ipsum dolor sit amets consectetur
              </p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropDown;
