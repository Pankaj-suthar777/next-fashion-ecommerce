import Link from "next/link";
import React from "react";

const CategorieSquare = ({
  item,
  classNameImage,
  selectedCategories,
  setSelectedCategories,
}: {
  classNameImage?: string;
  item: {
    img: string;
    name: string;
  };
  setSelectedCategories: Function;
  selectedCategories: string;
}) => {
  return (
    <Link
      href={`/productlist?category=${item.name}`}
      className={`flex justify-center items-center ${
        selectedCategories === item.name ? "bg-gray-200 " : "bg-white"
      }  h-[80px] lg:h-[100px] text-black cursor-pointer`}
      onClick={() => setSelectedCategories(item.name)}
    >
      <img
        src={item.img}
        className={`sm:h-12 sm:w-12 h-8 w-8 text-white  bg-transparent ${classNameImage}`}
      />
    </Link>
  );
};

export default CategorieSquare;
