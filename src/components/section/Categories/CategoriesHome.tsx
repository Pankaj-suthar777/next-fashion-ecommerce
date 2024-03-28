"use client";
import React, { useState } from "react";
import CategorieSquare from "./CategorieSquare";

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
    <div className="grid grid-cols-6 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 sm:gap-x-4 gap-x-2 mb-[200px]">
      <div className="flex justify-between col-span-6 mb-10">
        <h1 className="text-xl font-bold">Categories</h1>
        <h1 className="font-semibold">View all</h1>
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

      {/* <CategorieSquare
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        png="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbS1XEU7qAnhP0HGVGD46DzDuJ1ETYfdICslpxOKXdDtr8_RE-KeUM6LdzRws3kF-Q10&usqp=CAU"
      />
      <CategorieSquare png="https://www.pngitem.com/pimgs/m/185-1859617_clipart-shirt-svg-white-shirt-png-icon-transparent.png" />
      <CategorieSquare
        png="https://static.vecteezy.com/system/resources/previews/029/573/068/original/dress-concept-single-premium-editable-stroke-pictogram-perfect-for-logos-mobile-apps-online-shops-and-web-sites-symbol-isolated-on-white-background-vector.jpg"
        classNameImage="h-20 w-20"
      />
      <CategorieSquare png="https://img.freepik.com/premium-vector/fashion-jeans-icon-outline-fashion-jeans-vector-icon-web-design-isolated-white-background_98396-24809.jpg" />
      <CategorieSquare png="https://i.pinimg.com/564x/53/4b/3d/534b3d306b597e6c19291686b5e04033.jpg" />
      <CategorieSquare png="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh4Z28mnGuUvQCdGFlcT1TCDyP7ilXHVV7w&usqp=CAU" /> */}
    </div>
  );
};

export default CategoriesRow;
