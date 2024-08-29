"use client";
import React, { useState } from "react";
import ProductTable from "./product-table";
import ProductForm from "./product-form";
import { ProductDetails } from "@/interfaces/Product";
//import { useToast } from "@/components/ui/use-toast";

const ProductActions = ({ products }: { products: ProductDetails[] }) => {
  // const { toast } = useToast();
  const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails>();

  return (
    <div className="mt-[50px] w-full">
      <div className="flex justify-between mb-[50px] items-center">
        <h1 className="lg:text-3xl text-xl font-normal">Products</h1>
        <div
          className="sm:px-4 px-3 py-2 flex gap-2 items-center bg-black text-white rounded-md cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <i className="ri-add-line lg:text-lg text-sm"></i>
          <span className="sm:text-md text-xs">Add Product</span>
        </div>
      </div>
      <div className="overflow-y-auto sm:w-full w-[85vw]">
        <ProductTable
          products={JSON.parse(JSON.stringify(products))}
          setSelectedProduct={setSelectedProduct}
          setOpen={setOpen}
        />

        <ProductForm
          setSelectedProduct={setSelectedProduct}
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
        />
      </div>
    </div>
  );
};

export default ProductActions;
