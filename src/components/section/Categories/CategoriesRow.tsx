"use client";
import React, { useState } from "react";
import CategorieSquare from "./CategorieSquare";
import Link from "next/link";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const CategoriesRow = () => {
  const [selectedCategories, setSelectedCategories] = useState(1);
  return (
    <div className="grid grid-cols-6 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 sm:gap-x-4 gap-x-2">
      <div className="flex justify-between col-span-6 mb-10">
        <h1 className="text-xl font-bold">Categories</h1>
        <h1 className="font-semibold text-sm cursor-pointer">
          <Link href="/categories">View all</Link>
        </h1>
      </div>
      {CategoriesData.map((item, index) => (
        <CategorieSquare
          key={index}
          index={index + 1}
          setSelectedCategories={setSelectedCategories}
          png={item}
          selectedCategories={selectedCategories}
        />
      ))}
    </div>
  );
};

export default CategoriesRow;
