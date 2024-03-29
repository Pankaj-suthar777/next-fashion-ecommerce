"use client";
import React, { useState } from "react";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMehod] = useState("credit");
  return (
    <div className="flex gap-6">
      <div
        className={`flex gap-4 items-center border border-black py-5 px-8 cursor-pointer ${
          selectedMethod === "credit" ? "bg-neutral-200" : ""
        } `}
        onClick={() => setSelectedMehod("credit")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4021/4021708.png"
          className="h-10 w-10"
        />
        <p className="text-sm">Credit Card</p>
      </div>
      <div
        className={`flex gap-4 items-center border border-black py-5 px-8 cursor-pointer ${
          selectedMethod === "cash" ? "bg-neutral-200" : ""
        } `}
        onClick={() => setSelectedMehod("cash")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/4766/4766874.png"
          className="h-10 w-10"
        />
        <p className="text-sm">Cash on Delivery</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
