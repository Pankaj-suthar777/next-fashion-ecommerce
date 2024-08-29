"use client";
import React from "react";
import NavbarSearch from "@/components/layout/navbar/navbar";
import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import CategoriePageComponent from "./_component/categorie-page-component";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const categoriesWithNames = [
  { id: 1, name: "Sweatshirt", image: CategoriesData[0], value: "Sweatshirt" },
  { id: 2, name: "Shirt", image: CategoriesData[1], value: "shirt" },
  { id: 3, name: "Dress", image: CategoriesData[2], value: "dress" },
  { id: 4, name: "Jeans", image: CategoriesData[3], value: "jeans" },
  { id: 5, name: "Shoes", image: CategoriesData[4], value: "shoe" },
  { id: 6, name: "Bags", image: CategoriesData[5], value: "bag" },
];

const page = () => {
  return (
    <div>
      <NavbarSearch type="search" />

      <div className="w-screen flex flex-col justify-center mb-[40px] items-center">
        <div className="w-[80%] px-0 xl:px-12 mb-8">
          <div className="mt-[20px]">
            <BreadcrumbComponent
              items={[{ href: "/categories", name: "Categories" }]}
            />
          </div>
          <h1 className="font-semibold text-xl text-center tracking-wider mt-[40px]">
            Categories
          </h1>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-[40px] w-full">
            {categoriesWithNames.map((item, index) => (
              <CategoriePageComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
