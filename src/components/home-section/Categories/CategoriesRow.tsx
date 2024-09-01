"use client";
import React, { useState } from "react";
import CategorieSquare from "./CategorieSquare";
import Link from "next/link";
import { SalesPopup } from "@/components/layout/sales-pop";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const CategoriesData = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
    name: "tshirt",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/863/863684.png",
    name: "shirt",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
    name: "dress",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/998/998771.png",
    name: "jeans",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/599/599762.png",
    name: "shoe",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
    name: "bag",
  },
];

const CategoriesRow = () => {
  const [open, setOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState("");
  return (
    <>
      {/* <SalesPopup isOpen={open} setIsOpen={setOpen} /> */}
      <div className="flex justify-between mb-10">
        <h1 className="sm:text-xl text-sm font-bold">Categories</h1>
        <h1 className="font-semibold sm:text-sm cursor-pointer text-xs">
          <Link href="/categories">View all</Link>
        </h1>
      </div>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full pb-4"
        >
          {CategoriesData.map((c, i) => (
            <SwiperSlide key={i}>
              <CategorieSquare
                setSelectedCategories={setSelectedCategories}
                item={c}
                selectedCategories={selectedCategories}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategoriesRow;
