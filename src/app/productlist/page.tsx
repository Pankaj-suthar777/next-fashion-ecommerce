"use client";
import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DropdownMenuDemo } from "@/components/DropDown";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FilterSide from "./_component/FilterSide";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PriceFilter from "./_component/PriceFilter";
import CategoriesFilter from "./_component/CategoriesFilter";
import RatingFilter from "./_component/RatingFilter";
import axios from "axios";
import { ProductDetails } from "@/interfaces/Product";
import { useRouter } from "next/navigation";

// const productData = [
//   {
//     img: "https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg",
//     id: 1,
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU",
//     id: 2,
//   },
//   {
//     img: "https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg",
//     id: 3,
//   },
//   {
//     img: "https://rukminim1.flixcart.com/image/300/300/xif0q/sweatshirt/h/9/5/s-women-s-hoodie-full-sleeve-solid-sweatshirt-hoodies-veolic-original-imagbf999bufug7z.jpeg",
//     id: 4,
//   },
//   { img: "https://i.ibb.co/PcXVJ8m/studiobag.jpg", id: 5 },
//   { img: "https://i.ibb.co/NtpJ0XQ/cumulus-olive.png", id: 6 },
//   { img: "https://i.ibb.co/yRKyXPJ/dance-nylon.png", id: 7 },
//   { img: "https://i.ibb.co/Br2W7F0/stratus-backpack.png", id: 8 },
//   { img: "https://i.ibb.co/CPv6xTF/cirrus1.jpg", id: 9 },
//   { img: "https://i.ibb.co/LNNw217/mini-circle.png", id: 10 },
//   { img: "https://i.ibb.co/QmGdpLf/studio-bag-vaqueta.jpg", id: 11 },
//   {
//     img: "https://i.ibb.co/LzyPnF3/sling.png",
//     id: 12,
//   },
// ];

const CategoriesData = [
  "https://cdn-icons-png.flaticon.com/128/3129/3129449.png",
  "https://cdn-icons-png.flaticon.com/128/863/863684.png",
  "https://cdn-icons-png.flaticon.com/128/1785/1785255.png",
  "https://cdn-icons-png.flaticon.com/128/998/998771.png",
  "https://cdn-icons-png.freepik.com/512/599/599762.png",
  "https://cdn-icons-png.flaticon.com/128/1656/1656850.png",
];

const categoriesWithNames = [
  { id: 1, name: "T-shirt", image: CategoriesData[0] },
  { id: 2, name: "Shirt", image: CategoriesData[1] },
  { id: 3, name: "Dress", image: CategoriesData[2] },
  { id: 4, name: "Jeans", image: CategoriesData[3] },
  { id: 5, name: "Shoes", image: CategoriesData[4] },
  { id: 6, name: "Bags", image: CategoriesData[5] },
];

const pricesArray = [
  { id: 11, between: "All Price", onClick: () => {} },
  { id: 12, between: "$100 - $250", onClick: () => {} },
  { id: 13, between: "$250 - $500", onClick: () => {} },
  { id: 14, between: "$750 - $1000", onClick: () => {} },
  { id: 15, between: "$1000 - $1500", onClick: () => {} },
];

const ratingArray = [
  { id: 1, star: 1, onClick: () => {} },
  { id: 2, star: 2, onClick: () => {} },
  { id: 3, star: 3, onClick: () => {} },
  { id: 4, star: 4, onClick: () => {} },
];

const ProductList = () => {
  const [productData, setProductData] = useState<ProductDetails[]>();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedFilterTab, setSelectedFilterTab] = useState("price");
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    rating: [],
  });
  console.log(filters);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = productData?.slice(firstPostIndex, lastPostIndex);

  const getData = async () => {
    try {
      const response = await axios.post("/api/product", { filters });
      setProductData(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, [filters]);

  const router = useRouter();

  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbDemo
            items={[{ href: "/productlist", name: "Product List" }]}
          />
          <h1 className="font-semibold text-xl text-center tracking-wider sm:block hidden">
            Products
          </h1>
        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          <div className="row-span-4 col-span-1 hidden lg:block">
            <FilterSide filters={filters} setFilters={setFilters} />
          </div>
          <div className="flex items-center lg:col-span-5 md:col-span-4 sm:col-span-3 col-span-2 lg:ml-[50px] mt-12 justify-between">
            <p className="font-normal md:text-lg text-sm  text-gray-500">
              Total Products : {productData?.length}
            </p>
            <div className="lg:mx-8 md:text-lg text-sm flex items-center">
              <DropdownMenuDemo
                items={[
                  { name: "Low To High", onClick: () => {} },
                  { name: "High To Low", onClick: () => {} },
                ]}
                title="Sort by"
              />
              <Drawer>
                <DrawerTrigger>
                  <div className="h-8 w-8 flex justify-center items-center border border-gray-400 ml-2 rounded-md lg:hidden cursor-pointer">
                    <i className="ri-equalizer-line text-xl"></i>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                  </DrawerHeader>
                  <div className="grid grid-cols-3 p-4">
                    <div className="flex flex-col gap-y-2">
                      <div
                        className={`flex h-10 border border-black items-center px-2 ${
                          selectedFilterTab === "price" ? "bg-gray-300" : ""
                        }`}
                        onClick={() => setSelectedFilterTab("price")}
                      >
                        Price
                      </div>
                      <div
                        className={`flex h-10 border border-black items-center px-2 ${
                          selectedFilterTab === "category" ? "bg-gray-300" : ""
                        }`}
                        onClick={() => setSelectedFilterTab("category")}
                      >
                        Category
                      </div>
                      {/* <div  className={`flex h-10 border border-black items-center px-2 ${
                          selectedFilterTab === "price" ? "bg-gray-300" : ""
                        }`}
                      </div> */}
                      <div
                        className={`flex h-10 border border-black items-center px-2 ${
                          selectedFilterTab === "rating" ? "bg-gray-300" : ""
                        }`}
                        onClick={() => setSelectedFilterTab("rating")}
                      >
                        Rating
                      </div>
                    </div>
                    <div className="col-span-2 px-4 flex justify-center">
                      {selectedFilterTab === "price" ? (
                        <PriceFilter items={pricesArray} />
                      ) : selectedFilterTab === "category" ? (
                        <div>
                          <CategoriesFilter items={categoriesWithNames} />
                        </div>
                      ) : (
                        <RatingFilter items={ratingArray} />
                      )}
                    </div>
                  </div>
                  <DrawerFooter className="flex justify-center flex-row">
                    <div className="w-full">
                      <span className="px-4 py-2 flex items-center border bg-black text-white w-full rounded-md justify-center">
                        Apply
                      </span>
                    </div>
                    <DrawerClose className="w-full">
                      <span className="px-4 py-2 flex items-center border border-black text-black w-full rounded-md justify-center">
                        Clear
                      </span>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
          {currentPosts?.map((item) => (
            <motion.div
              key={item._id}
              className={`p-4 cursor-pointer flex flex-col items-center justify-center h-[280px]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }} // Adjust the duration here
              onMouseEnter={() => setHoveredProductId(item._id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div
                onClick={() => {
                  router.push(`/productlist/${item._id}`);
                }}
              >
                <img
                  className=" h-[150px] w-[150px] mb-2 object-cover"
                  src={item.image}
                />
                <div className="flex flex-col justify-center items-center mx-auto">
                  <span className="font-semibold text-center">
                    {item.name.slice(0, 10)}
                    {item.name.length > 15 ? "..." : ""}
                  </span>
                  <span className="text-xs mt-1">${item.price}</span>
                </div>
              </div>
              {hoveredProductId === item._id && (
                <Button
                  className="rounded-none mt-4 text-xs"
                  onClick={() => console.log("hi")}
                >
                  Add To Cart
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <PaginationSection
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={productData?.length}
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
