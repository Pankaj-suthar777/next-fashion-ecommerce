"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ProductDetails } from "@/interfaces/Product";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Spinner from "@/components/layout/spinner";

// const products = [
//   {
//     id: "65a69d8a1a600a6e0798e429",
//     name: "Airpods Wireless Bluetooth Headphones",
//     price: "89.99",
//     category: "Electronics",
//     brand: "Apple",
//   },
//   {
//     id: "65a69d8a1a600a6e0798e42a",
//     name: "iPhone 11 Pro 256GB Memory",
//     price: "599.99",
//     category: "Electronics",
//     brand: "Apple",
//   },
//   {
//     id: "65a69d8a1a600a6e0798e42b",
//     name: "Cannon EOS 80D DSLR Camera",
//     price: "929.99",
//     category: "Electronics",
//     brand: "Canon",
//   },
//   {
//     id: "65a69d8a1a600a6e0798e42c",
//     name: "Sony Playstation 4 Pro White Version",
//     price: "399.99",
//     category: "Electronics",
//     brand: "Sony",
//   },
// ];

const ProductTable = ({
  products,
  setSelectedProduct,
  setOpen,
}: {
  products: ProductDetails[];
  setSelectedProduct: Function;
  setOpen: Function;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const deleteHandler = async (id: any) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/product/${id}`);
      if ((res.status = 201)) {
        toast({
          className: "bg-[#32de84] text-black",
          title: "Product deleted successfully",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message,
      });
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <>
      {loading && (
        <div className="mb-5">
          <Spinner />
        </div>
      )}
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className="text-center">NAME</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead className="">CATEGORY</TableHead>
            <TableHead className="">BRAND</TableHead>
            <TableHead className="">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item._id}</TableCell>
              <TableCell className="text-center">{item.name}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell className="flex gap-4 items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setSelectedProduct(item);
                    setOpen(true);
                  }}
                >
                  <i className="ri-edit-line"></i>
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteHandler(item._id)}
                >
                  <i className="ri-delete-bin-line"></i>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductTable;
