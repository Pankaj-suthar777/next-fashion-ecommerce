import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "65ad0e71258b23802ef741c7",
    user: "elon musk",
    date: "2024-01-21",
    total: 689.99,
    paid: null,
    delivered: "2024-01-22",
  },
  {
    id: "65ad1643b12cfcf421191ca9",
    user: "elon musk",
    date: "2024-01-21",
    total: 1920.45,
    paid: null,
    delivered: null,
  },
  {
    id: "65ad3b4339ed6fb8ad904ea1",
    user: "john wick",
    date: "2024-01-21",
    total: 113.49,
    paid: null,
    delivered: null,
  },
  {
    id: "65ad3b6239ed6fb8ad904eaf",
    user: "john wick",
    date: "2024-01-21",
    total: 67.49,
    paid: null,
    delivered: null,
  },
  {
    id: "65ad3c0939ed6fb8ad904ece",
    user: "john wick",
    date: "2024-01-21",
    total: 793.48,
    paid: null,
    delivered: null,
  },
];

const OrderTable = () => {
  return (
    <div className="overflow-y-auto">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className="text-center">USER</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead className="">TOTAL</TableHead>
            <TableHead className="">PAID</TableHead>
            <TableHead className="">DELIVERED</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="text-center">{item.user}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>
                <div className="flex justify-center items-center">
                  {item.paid ? (
                    <i className="text-2xl ri-check-double-line"></i>
                  ) : (
                    <i className="text-2xl ri-close-fill"></i>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center items-center">
                  {item.delivered ? (
                    <i className="text-2xl ri-check-double-line"></i>
                  ) : (
                    <i className="text-2xl ri-close-fill"></i>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center items-center">
                  <Button variant="ghost">Details</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
