"use client";
import BreadcrumbComponent from "@/components/layout/breadcrumb-component";
import NavbarSearch from "@/components/layout/navbar/navbar";
import { Button } from "@/components/ui/button";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DropdownMenuComponent from "@/components/dropdown-menu-component";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FilterSide from "./_component/filter-side";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PriceFilter from "./_component/price-filter";
import CategoriesFilter from "./_component/categories-filter";
import RatingFilter from "./_component/rating-filter";
import axios from "axios";
import { ProductDetails } from "@/interfaces/Product";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

const ProductList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
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
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const categoryParam = queryParams.get("category");
    if (categoryParam) {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        category: [categoryParam],
      }));
    }
  }, []);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = productData?.slice(firstPostIndex, lastPostIndex);

  const getData = async () => {
    try {
      if (sortBy === "") {
        const response = await axios.post("/api/product", { filters });
        setProductData(response.data);
      } else {
        const response = await axios.post("/api/product", { filters, sortBy });
        setProductData(response.data);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters, sortBy]);

  const handleClearFilters = useCallback(() => {
    setFilters({ category: [], price: [], rating: [] });
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[85%] px-4 xl:px-12 mb-8">
        <NavbarSearch type="search" />
        <div className="flex flex-col gap-y-8 mt-10 ">
          <BreadcrumbComponent
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
              <DropdownMenuComponent
                items={[
                  {
                    name: "Newly added",
                    onClick: () => {
                      setSortBy("NEWLY");
                    },
                  },
                  {
                    name: "Low To High",
                    onClick: () => {
                      setSortBy("LTH");
                    },
                  },
                  {
                    name: "High To Low",
                    onClick: () => {
                      setSortBy("HTL");
                    },
                  },
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
                        <PriceFilter
                          filters={filters}
                          setFilters={setFilters}
                        />
                      ) : selectedFilterTab === "category" ? (
                        <div>
                          <CategoriesFilter
                            filters={filters}
                            setFilters={setFilters}
                          />
                        </div>
                      ) : (
                        <RatingFilter
                          filters={filters}
                          setFilters={setFilters}
                        />
                      )}
                    </div>
                  </div>
                  <DrawerFooter className="flex justify-center flex-row">
                    <DrawerClose className="w-full">
                      <div
                        className="w-full"
                        onClick={() => handleClearFilters()}
                      >
                        <span className="px-4 py-2 flex items-center border bg-black text-white w-full rounded-md justify-center">
                          Clear Filters
                        </span>
                      </div>
                    </DrawerClose>
                    <DrawerClose className="w-full">
                      <span className="px-4 py-2 flex items-center border border-black text-black w-full rounded-md justify-center">
                        Close
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
              onMouseEnter={() => setHoveredProductId(item._id!)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div
                onClick={() => {
                  router.push(`/productlist/${item._id}`);
                }}
              >
                <img
                  alt=""
                  className=" h-[150px] w-[150px] mb-2 object-cover"
                  src={item.image![0]}
                />
                <div className="flex flex-col justify-center items-center mx-auto">
                  <span className="font-semibold text-center">
                    {item.name.slice(0, 10)}
                    {item.name.length > 10 ? "..." : ""}
                  </span>
                  <span className="text-xs mt-1">${item.price}</span>
                </div>
              </div>
              {hoveredProductId === item._id && (
                <Button
                  className="rounded-none mt-4 text-xs"
                  onClick={() => {
                    toast({ title: "Item added to cart" });
                    dispatch(addToCart(item));
                    router.push("/cart");
                  }}
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
