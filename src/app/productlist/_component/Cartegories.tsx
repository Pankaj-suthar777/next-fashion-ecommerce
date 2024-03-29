import React from "react";
import CategoriesFilter from "./CategoriesFilter";
import { Separator } from "@/components/ui/separator";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const categoriesWithNames = [
  { id: 1, name: "T-shirt", image: CategoriesData[0] },
  { id: 2, name: "Shirt", image: CategoriesData[1] },
  { id: 3, name: "Dress", image: CategoriesData[2] },
  { id: 4, name: "Jeans", image: CategoriesData[3] },
  { id: 5, name: "Shoes", image: CategoriesData[4] },
  { id: 6, name: "Bags", image: CategoriesData[5] },
];

const Cartegories = () => {
  return (
    <div>
      <h1 className="text-semibold text-lg ">Categories</h1>
      <Separator className="my-4" />
      <CategoriesFilter items={categoriesWithNames} />
    </div>
  );
};

export default Cartegories;
