"use client";
import React, { useState } from "react";
import CategorieSquare from "./CategorieSquare";
import Link from "next/link";
import { SalesPopup } from "@/components/layout/sales-pop";

const CategoriesData = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
    name: "tshirt",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/863/863684.png",
    name: "shirt",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
    name: "dress",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/998/998771.png",
    name: "jeans",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/599/599762.png",
    name: "shoe",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
    name: "bag",
  },
];

const CategoriesRow = () => {
  const [open, setOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState("");
  return (
    <>
      <SalesPopup isOpen={open} setIsOpen={setOpen} />
      <div className="flex justify-between mb-10">
        <h1 className="sm:text-xl text-sm font-bold">Categories</h1>
        <h1 className="font-semibold sm:text-sm cursor-pointer text-xs">
          <Link href="/categories">View all</Link>
        </h1>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-5 grid-cols-4 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 sm:gap-x-4 gap-x-2">
        <CategorieSquare
          setSelectedCategories={setSelectedCategories}
          item={CategoriesData[0]}
          selectedCategories={selectedCategories}
        />
        <CategorieSquare
          setSelectedCategories={setSelectedCategories}
          item={CategoriesData[1]}
          selectedCategories={selectedCategories}
        />
        <CategorieSquare
          setSelectedCategories={setSelectedCategories}
          item={CategoriesData[2]}
          selectedCategories={selectedCategories}
        />
        <CategorieSquare
          setSelectedCategories={setSelectedCategories}
          item={CategoriesData[3]}
          selectedCategories={selectedCategories}
        />
        <div className="hidden sm:block">
          <CategorieSquare
            setSelectedCategories={setSelectedCategories}
            item={CategoriesData[4]}
            selectedCategories={selectedCategories}
          />
        </div>
        <div className="hidden md:block">
          <CategorieSquare
            setSelectedCategories={setSelectedCategories}
            item={CategoriesData[5]}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesRow;
