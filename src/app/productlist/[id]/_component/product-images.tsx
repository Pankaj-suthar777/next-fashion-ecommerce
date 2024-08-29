"use client";
import React, { useState } from "react";

// Define the type/interface for the product data
interface Product {
  img: string;
  id: number;
}

const productData: Product[] = [
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
];

const ProductImages = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-12">
      <img
        src={selectedImage}
        alt=""
        className="h-[280px] w-[280px] object-cover"
      />
      <div className="flex gap-6">
        {images.map((item: any) => (
          <div
            key={item}
            className={`${selectedImage === item ? "border border-black" : ""}`}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item}
              className="h-[100px] w-[100px] object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
