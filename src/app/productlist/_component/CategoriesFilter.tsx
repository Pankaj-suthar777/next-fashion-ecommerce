"use client";
import React, { useState } from "react";

const CategoriesFilter = ({
  items,
}: {
  items: {
    image: string;
    name: string;
    id: number;
  }[];
}) => {
  const [selectedCate, setSelectedCate] = useState(1);
  return items.map((item) => {
    const isSelected = selectedCate === item.id;
    return (
      <div
        className="flex gap-x-6 py-3 cursor-pointer"
        onClick={() => setSelectedCate(item.id)}
      >
        <img src={item.image} className={`h-6 w-6 `} />
        <p className={`${isSelected ? "text-black" : "text-gray-400"} `}>
          {item.name}
        </p>
      </div>
    );
  });
};

export default CategoriesFilter;
