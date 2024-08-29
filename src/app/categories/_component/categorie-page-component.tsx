import Link from "next/link";
import React from "react";

const CategoriePageComponent = ({
  item,
}: {
  item: { id: number; value: string; image: string; name: string };
}) => {
  return (
    <Link href={`/productlist?category=${item.value}`}>
      <div className="md:h-[150px] h-[100px] flex justify-center items-center bg-gray-100 cursor-pointer">
        <div>
          <img
            alt=""
            src={item.image}
            className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]"
          />
        </div>
        <div className="flex flex-col md:ml-8 ml-4">
          <h1 className="font-semibold md:text-xl text-sm">{item.name}</h1>
          <p className="md:text-xl text-sm text-gray-600">Collections</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoriePageComponent;
