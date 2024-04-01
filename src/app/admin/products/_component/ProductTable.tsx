import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "65a69d8a1a600a6e0798e429",
    name: "Airpods Wireless Bluetooth Headphones",
    price: "89.99",
    category: "Electronics",
    brand: "Apple",
  },
  {
    id: "65a69d8a1a600a6e0798e42a",
    name: "iPhone 11 Pro 256GB Memory",
    price: "599.99",
    category: "Electronics",
    brand: "Apple",
  },
  {
    id: "65a69d8a1a600a6e0798e42b",
    name: "Cannon EOS 80D DSLR Camera",
    price: "929.99",
    category: "Electronics",
    brand: "Canon",
  },
  {
    id: "65a69d8a1a600a6e0798e42c",
    name: "Sony Playstation 4 Pro White Version",
    price: "399.99",
    category: "Electronics",
    brand: "Sony",
  },
];

const ProductTable = () => {
  return (
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
        {products.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell className="text-center">{item.name}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell className="flex gap-4 items-center justify-center">
              <Button variant="outline" size="icon">
                <i className="ri-edit-line"></i>
              </Button>
              <Button variant="destructive" size="icon">
                <i className="ri-delete-bin-line"></i>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
