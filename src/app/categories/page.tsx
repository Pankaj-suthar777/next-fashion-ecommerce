"use client";
import React from "react";
import PriceFilter from "../productlist/_component/PriceFilter";
import { Separator } from "@/components/ui/separator";
import RatingFilter from "../productlist/_component/RatingFilter";
import NavbarSearch from "@/components/Navbar";
import CateegoriePageComponent from "./_component/CateegoriePageComponent";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const page = () => {
  const pricesArray = [
    { id: 11, between: "All Price", onClick: () => {} },
    { id: 12, between: "$100 - $250", onClick: () => {} },
    { id: 13, between: "$250 - $500", onClick: () => {} },
    { id: 14, between: "$750 - $1000", onClick: () => {} },
    { id: 15, between: "$1000 - $1500", onClick: () => {} },
  ];

  const ratingArray = [
    { id: 1, star: 1, onClick: () => {} },
    { id: 2, star: 2, onClick: () => {} },
    { id: 3, star: 3, onClick: () => {} },
    { id: 4, star: 4, onClick: () => {} },
  ];
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="mt-[20px]">
          <BreadcrumbDemo
            items={[{ href: "/categories", name: "Categories" }]}
          />
        </div>
        <h1 className="font-semibold text-xl text-center tracking-wider mt-[40px]">
          Categories
        </h1>
        <div className="grid grid-cols-6 mt-[40px]">
          <div className="col-span-1">
            <h1 className="text-semibold text-lg mb-8">Filter by Price</h1>
            <PriceFilter items={pricesArray} />
            <Separator className="my-4" />
            <h1 className="text-semibold text-lg mb-8">Filter by Rating</h1>
            <RatingFilter items={ratingArray} />
          </div>
          <div className="col-span-5 grid grid-cols-2 gap-8">
            {CategoriesData.map((item, index) => (
              <CateegoriePageComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
