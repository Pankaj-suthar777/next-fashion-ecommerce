"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

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
  { img: "https://i.ibb.co/PcXVJ8m/studiobag.jpg", id: 5 },
  { img: "https://i.ibb.co/NtpJ0XQ/cumulus-olive.png", id: 6 },
  { img: "https://i.ibb.co/yRKyXPJ/dance-nylon.png", id: 7 },
  { img: "https://i.ibb.co/Br2W7F0/stratus-backpack.png", id: 8 },
  { img: "https://i.ibb.co/CPv6xTF/cirrus1.jpg", id: 9 },
  { img: "https://i.ibb.co/LNNw217/mini-circle.png", id: 10 },
  { img: "https://i.ibb.co/QmGdpLf/studio-bag-vaqueta.jpg", id: 11 },
  {
    img: "https://i.ibb.co/LzyPnF3/sling.png",
    id: 12,
  },
];

const FeaturedRow = () => {
  const [selcted, setSelected] = useState(1);
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Featured</h1>
        <h1 className="font-semibold text-sm">
          <Link href="/productlist">View all</Link>
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-3  gap-x-2 gap-y-2 mb-[200px]">
        {productData.map((item) => (
          <div
            className={`p-4  bg-slate-100 ${
              selcted === item.id && "border border-black"
            } flex flex-col items-center justify-center h-[330px]`}
            onClick={() => setSelected(item.id)}
          >
            <img
              className=" h-[150px] w-[150px] mb-2 object-cover"
              src={item.img}
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold">Purple Sweatshirt</span>
              <span className="text-xs mt-1">$400</span>
              {selcted === item.id && (
                <Button className="rounded-none mt-4 text-sm">
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedRow;
