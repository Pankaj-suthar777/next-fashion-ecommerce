"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const categoriesWithNames = [
  {
    id: 8,
    name: "All",
    image: "https://cdn-icons-png.flaticon.com/128/5110/5110754.png",
    value: "all",
  },
  { id: 1, name: "Sweatshirt", image: CategoriesData[0], value: "Sweatshirt" },
  { id: 2, name: "Shirt", image: CategoriesData[1], value: "shirt" },
  { id: 3, name: "Dress", image: CategoriesData[2], value: "dress" },
  { id: 4, name: "Jeans", image: CategoriesData[3], value: "jeans" },
  { id: 5, name: "Shoes", image: CategoriesData[4], value: "shoe" },
  { id: 6, name: "Bags", image: CategoriesData[5], value: "bag" },
];

const CategoriesFilter = ({
  filters,
  setFilters,
}: {
  filters: {
    category: string[];
    price: string[];
  };
  setFilters: Function;
}) => {
  const [viewMore, setViewMore] = useState(false);
  const [selectedCate, setSelectedCate] = useState(8); // default to "All"

  useEffect(() => {
    // Update selected category based on initial filter value
    if (filters.category && filters.category.length > 0) {
      const selectedCategory = categoriesWithNames.find(
        (category) => category.value === filters.category[0]
      );
      if (selectedCategory) {
        setSelectedCate(selectedCategory.id);
      }
    }
  }, [filters]);

  const toggleView = () => {
    setViewMore(!viewMore);
  };

  const handleCategoryClick = (id: number) => {
    setSelectedCate(id);
  };

  const renderCategories = () => {
    const categories = viewMore
      ? categoriesWithNames
      : categoriesWithNames.slice(0, 4);

    return categories.map((item) => (
      <div
        key={item.id}
        className="flex gap-x-6 py-3 cursor-pointer"
        onClick={() => {
          setFilters((prevFilters: any) => ({
            ...prevFilters,
            category: [item.value],
          }));
          handleCategoryClick(item.id);
        }}
      >
        <img src={item.image} className={`h-6 w-6`} alt={item.name} />
        <p
          className={`${
            selectedCate === item.id ? "text-black" : "text-gray-400"
          }`}
        >
          {item.name}
        </p>
      </div>
    ));
  };

  return (
    <>
      <div>{renderCategories()}</div>
      <div className="flex gap-x-2 cursor-pointer items-center justify-start">
        {viewMore ? (
          <i
            className="ri-arrow-drop-up-line text-3xl text-gray-400 mt-1 hover:text-black"
            onClick={toggleView}
          ></i>
        ) : (
          <i
            className="ri-arrow-drop-down-line text-3xl text-gray-400 mt-1 hover:text-black"
            onClick={toggleView}
          ></i>
        )}
        <p className="text-gray-400 hover:text-black" onClick={toggleView}>
          {viewMore ? "View Less" : "View More"}
        </p>
      </div>
    </>
  );
};

export default CategoriesFilter;
