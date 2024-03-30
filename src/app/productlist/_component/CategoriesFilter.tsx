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
  const [viewMore, setViewMore] = useState(false);
  const [selectedCate, setSelectedCate] = useState(1);

  const toggleView = () => {
    setViewMore(!viewMore);
  };

  const handleCategoryClick = (id) => {
    setSelectedCate(id);
  };

  const renderCategories = () => {
    const categories = viewMore ? items : items.slice(0, 4);

    return categories.map((item) => (
      <div
        key={item.id}
        className="flex gap-x-6 py-3 cursor-pointer"
        onClick={() => handleCategoryClick(item.id)}
      >
        <img src={item.image} className={`h-6 w-6`} />
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
