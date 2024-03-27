import React from "react";
import CategorieSquare from "./CategorieSquare";

const CategoriesHome = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Categories</h1>
        <h1>view all</h1>
      </div>
      <div className="mt-10 flex gap-x-8 justify-center w-full overflow-x-scroll">
        <CategorieSquare />
        <CategorieSquare />
        <CategorieSquare />
      </div>
    </div>
  );
};

export default CategoriesHome;
