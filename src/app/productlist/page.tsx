"use client";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DropdownMenuDemo } from "@/components/DropDown";
import Filter from "./_component/Filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const ProductList = () => {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo
            items={[{ href: "/productlist", name: "Product List" }]}
          />
          <h1 className="font-semibold text-xl text-center tracking-wider">
            Product List
          </h1>
        </div>

        <div className="grid grid-cols-6">
          <div className="row-span-4 col-span-1">
            <Filter />
          </div>
          <div className="flex items-center col-span-5 ml-[50px] mt-12 justify-between">
            <p className="font-normal text-gray-500">
              Total Products : {productData.length}
            </p>
            <div className="mx-8">
              <span className="text-slate-500">Sort by:</span>{" "}
              <DropdownMenuDemo
                items={[
                  { name: "Low To High", onClick: () => {} },
                  { name: "High To Low", onClick: () => {} },
                ]}
                title="Newst Items"
              />
            </div>
          </div>
          {currentPosts.map((item) => (
            <motion.div
              key={item.id}
              className={`p-4 cursor-pointer flex flex-col items-center justify-center h-[280px]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }} // Adjust the duration here
              onMouseEnter={() => setHoveredProductId(item.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                className=" h-[150px] w-[150px] mb-2 object-cover"
                src={item.img}
              />
              <div className="flex flex-col justify-center items-center mx-auto">
                <span className="font-semibold">Purple Sweatshirt</span>
                <span className="text-xs mt-1">$400</span>

                {hoveredProductId === item.id && (
                  <Button className="rounded-none mt-4 text-xs">
                    Add to Cart
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={productData.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

const PaginationSection = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: any;
  itemsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          onClick={() => handlePrevPage()}
          className="cursor-pointer"
        />
        {pages.map((page, index) => (
          <PaginationItem
            key={index}
            className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
          >
            <PaginationLink
              onClick={() => setCurrentPage(page)}
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationNext
          onClick={() => handleNextPage()}
          className="cursor-pointer"
        />
      </PaginationContent>
    </Pagination>
  );
};

export default ProductList;
