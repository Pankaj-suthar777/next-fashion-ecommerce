import React from "react";

const CategorieSquare = ({
  index,
  icon,
  png,
  classNameImage,
  selectedCategories,
  setSelectedCategories,
}: {
  index: number;
  classNameImage?: string;
  icon?: string;
  png?: string;
  setSelectedCategories: Function;
  selectedCategories: number;
}) => {
  return (
    <div
      className={`flex justify-center items-center ${
        selectedCategories === index ? "bg-gray-200 " : "bg-white"
      }  h-[80px]  lg:h-[100px] text-black `}
      onClick={() => setSelectedCategories(index)}
    >
      {png ? (
        <img
          src={png}
          className={`h-12 w-12 text-white  bg-transparent ${classNameImage}`}
        />
      ) : (
        <i className={`${icon}  lg:text-3xl text-xl`}></i>
      )}
    </div>
  );
};

export default CategorieSquare;
