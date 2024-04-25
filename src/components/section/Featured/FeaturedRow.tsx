"use client";
import { Button } from "@/components/ui/button";
import { ProductDetails } from "@/interfaces/Product";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FeaturedRow = () => {
  const router = useRouter();
  const [productData, setProductData] = useState<ProductDetails[]>();
  const [selcted, setSelected] = useState("");
  const getData = async () => {
    try {
      const response = await axios.post("/api/product", {
        limit: 12,
      });
      setProductData(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <h1 className="sm:text-xl text-sm font-bold">Featured</h1>
        <h1 className="font-semibold sm:text-sm cursor-pointer text-xs">
          <Link href="/productlist">View all</Link>
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 grid-rows-3  gap-x-2 gap-y-2 mb-[200px]">
        {productData?.map((item) => (
          <div
            key={item._id}
            className={`sm:p-4 p-2  bg-slate-100 ${
              selcted === item._id && "border border-black"
            } flex flex-col items-center justify-center sm:h-[330px] h-[270px] cursor-pointer`}
            onClick={() => setSelected(item._id!)}
          >
            <img
              className="h-[160px] w-[160px] mb-2 object-cover"
              src={item.image![0]}
            />

            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold sm:text-lg lg:text-lg text-xs text-center">
                {item.name.slice(0, 15)}
                {item.name.length > 15 ? "..." : ""}
              </span>
              <span className="text-xs mt-1">${item.price}</span>
              {selcted === item._id && (
                <Button
                  className="rounded-none mt-4 text-sm"
                  onClick={() => router.push(`/productlist/${item._id}`)}
                >
                  View Product
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
