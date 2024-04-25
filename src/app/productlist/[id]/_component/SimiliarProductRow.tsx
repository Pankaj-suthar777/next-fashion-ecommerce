import { connectDB } from "@/config/dbConfig";
import { ProductDetails } from "@/interfaces/Product";
import Product from "@/models/productModal";
import Link from "next/link";
import React from "react";
connectDB();

const SimiliarProductRow = async ({ product }: { product: ProductDetails }) => {
  const similarProduct = await Product.find({
    category: product.category,
  }).limit(4);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 xl:gap-x-20 lg:gap-x-14 md:gap-x-10 sm:gap-x-4 gap-x-2 lg:gap-y-0 gap-y-8">
      <div className="flex justify-between lg:col-span-4 col-span-2 mb-10">
        <h1 className="text-xl font-bold">Similiar Product</h1>
        <h1 className="font-semibold text-sm cursor-pointer">
          <Link href={`/productlist?category=${product.category}`}>
            View all
          </Link>
        </h1>
      </div>
      {similarProduct?.map((item) => (
        <Link href={`/productlist/${item._id}`}>
          <div
            key={item.id}
            className={`lg:p-4 p-2 cursor-pointer flex flex-col items-center justify-center lg:h-[340px] h-[270px]`}
          >
            <img
              className=" h-[200px] w-[200px] mb-2 object-cover"
              src={item.image[0] || "no"}
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold mt-2">
                {item.name.slice(0, 10)}
                {item.name.length > 10 ? "..." : ""}
              </span>
              <span className="text-md mt-3">${item.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimiliarProductRow;
