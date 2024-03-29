import React from "react";

const CateegoriePageComponent = ({ item }: { item: string }) => {
  return (
    <div className="h-[150px] flex justify-center items-center bg-gray-100 cursor-pointer">
      <div>
        <img src={item} className="h-[60px] w-[60px]" />
      </div>
      <div className="flex flex-col ml-8">
        <h1 className="font-semibold text-xl">Jacket</h1>
        <p className="text-xl text-gray-600">Collections</p>
      </div>
    </div>
  );
};

export default CateegoriePageComponent;
