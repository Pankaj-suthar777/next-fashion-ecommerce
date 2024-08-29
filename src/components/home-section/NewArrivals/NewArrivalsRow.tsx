import { connectDB } from "@/config/dbConfig";
import { ProductDetails } from "@/interfaces/Product";
import Product from "@/models/productModal";
import React from "react";
import AddItemToCartButton from "./AddItemToCartButton";
import Link from "next/link";
connectDB();

const NewArrivalsRow = async () => {
  const productsData: ProductDetails[] = (await Product.find({})
    .sort()
    .limit(5)) as any;
  const products: ProductDetails[] = JSON.parse(JSON.stringify(productsData));

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="sm:text-xl text-sm font-bold">New Arrivals</h1>
        <h1 className="font-semibold sm:text-sm text-xs">View all</h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-3 grid-rows-2 gap-x-2 gap-y-2 h-[500px]">
        <div className="flex bg-slate-100 sm:p-4 p-1 lg:col-span-2 col-span-4 items-center row-span-2">
          <img
            alt=""
            className="max-h-[300px] sm:w-fit w-[50%] "
            src={products[0].image![0]}
          />

          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold sm:text-xl text-sm">
              {products[0].name}
            </span>
            <span className="text-xs mt-1">${products[0].price}</span>
            <AddItemToCartButton item={products[0]} />
          </div>
        </div>

        {products.slice(1, -1).map((product, i) => (
          <Link href={`/productlist/${product._id}`} key={i}>
            <div className="h-full w-full">
              <div className="p-4 bg-slate-100 flex flex-col items-center justify-center h-full w-full">
                <img
                  alt=""
                  className=" h-[90px] w-[90px] mb-2 object-cover"
                  src={product.image![0]}
                />

                <div className="flex flex-col justify-center items-center mx-auto">
                  <span className="font-semibold sm:text-lg text-xs text-center">
                    {product.name.slice(0, 10)}
                    {product.name.length > 10 ? "..." : ""}
                  </span>
                  <span className="text-xs mt-1">${product.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <Link href={`/productlist/${products[4]._id}`}>
          <div className="sm:block hidden h-full w-full">
            <div className="p-4 bg-slate-100 flex flex-col items-center justify-center h-full w-full">
              <img
                alt=""
                className=" h-[90px] w-[90px] mb-2 object-cover"
                src={products[4]?.image?.[0] || ""}
              />

              <div className="flex flex-col justify-center items-center mx-auto">
                <span className="font-semibold sm:text-lg text-xs text-center">
                  {products[4]?.name}
                </span>
                <span className="text-xs mt-1">${products[4]?.price}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewArrivalsRow;
