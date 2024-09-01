"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  if (isAdminRoute) {
    return null;
  }
  return (
    <div className="flex flex-col p-12 bg-slate-700 ">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-center md:col-span-1 col-span-2">
          <div>
            <h1 className="text-white font-semibold mb-5 cursor-pointer">
              Logo
            </h1>
            <div className="flex flex-col space-y-4 text-white">
              <p className="font-light text-xs leading-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="font-normal text-xs">
                <i className="ri-phone-line mr-2"></i> +9876543210
              </p>
              <p className="font-normal text-xs">
                <i className="ri-mail-line mr-2"></i>example@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:col-span-1 col-span-2">
          <div>
            <h1 className="text-white font-semibold mb-5 ">Product Link</h1>
            <div className="flex flex-col space-y-4 text-white">
              <p className="font-light text-xs cursor-pointer">
                <Link href="/categories">Categories</Link>
              </p>
              <p className="font-light text-xs cursor-pointer">
                <Link href="/new-arrival">New Arrival</Link>
              </p>
              <p className="font-light text-xs cursor-pointer">
                <Link href={"/contact-us"}>Contact Us</Link>
              </p>
              <p className="font-light text-xs cursor-pointer">
                <Link href={"/productlist"}>Collections</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:mt-0 mt-10 md:col-span-1 col-span-2 items-start md:items-center">
          <div>
            <h1 className="text-white font-semibold mb-5 ">Support</h1>
            <div className="flex flex-col space-y-4 text-white ">
              <p className="font-light text-xs cursor-pointer">
                Support Center
              </p>
              <p className="font-light text-xs cursor-pointer">FAQ</p>
              <p className="font-light text-xs cursor-pointer">
                Privacy Policy
              </p>
              <p className="font-light text-xs cursor-pointer">
                Terms of service
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:mt-0 mt-10 md:col-span-1 col-span-2">
          <div>
            <h1 className="text-white font-semibold mb-4">Get In Touch</h1>
            <div className="flex gap-x-4 text-white">
              <i className="ri-instagram-line text-white cursor-pointer"></i>
              <i className="ri-twitter-x-line text-white cursor-pointer"></i>
              <i className="ri-facebook-circle-fill text-white cursor-pointer"></i>
            </div>
          </div>
        </div>
        <h1 className="text-white items-center col-span-4 flex mt-16 justify-center text-xs font-light">
          Copyright &copy; Logo. All Right Reseved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
