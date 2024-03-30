"use client";
import React from "react";
import PriceFilter from "../productlist/_component/PriceFilter";
import { Separator } from "@/components/ui/separator";
import RatingFilter from "../productlist/_component/RatingFilter";
import NavbarSearch from "@/components/Navbar";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import CategoriePageComponent from "./_component/CategoriePageComponent";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const page = () => {
  return (
    <div>
      <NavbarSearch type="search" />

      <div className="w-screen flex flex-col justify-center mb-[40px] items-center">
        <div className="w-[80%] px-0 xl:px-12 mb-8">
          <div className="mt-[20px]">
            <BreadcrumbDemo
              items={[{ href: "/categories", name: "Categories" }]}
            />
          </div>
          <h1 className="font-semibold text-xl text-center tracking-wider mt-[40px]">
            Categories
          </h1>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-[40px] w-full">
            {CategoriesData.map((item, index) => (
              <CategoriePageComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
