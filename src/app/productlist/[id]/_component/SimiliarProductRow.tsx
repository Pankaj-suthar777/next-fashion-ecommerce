import Link from "next/link";
import React from "react";

const productData = [
  {
    img: "https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg",
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU",
    id: 2,
  },
  {
    img: "https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg",
    id: 3,
  },
  {
    img: "https://rukminim1.flixcart.com/image/300/300/xif0q/sweatshirt/h/9/5/s-women-s-hoodie-full-sleeve-solid-sweatshirt-hoodies-veolic-original-imagbf999bufug7z.jpeg",
    id: 4,
  },
];

const SimiliarProductRow = () => {
  return (
    <div className="grid grid-cols-4 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 sm:gap-x-4 gap-x-2 mt-[100px]">
      <div className="flex justify-between col-span-4 mb-10">
        <h1 className="text-xl font-bold">Similiar Product</h1>
        <h1 className="font-semibold text-sm cursor-pointer">
          <Link href="/productlist">View all</Link>
        </h1>
      </div>
      {productData.map((item) => (
        <div
          key={item.id}
          className={`p-4 cursor-pointer flex flex-col items-center justify-center h-[340px]`}
        >
          <img
            className=" h-[200px] w-[200px] mb-2 object-cover"
            src={item.img}
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold mt-2">Purple Sweatshirt</span>
            <span className="text-md mt-3">$400</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimiliarProductRow;
