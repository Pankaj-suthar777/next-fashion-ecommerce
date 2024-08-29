"use client";
import Image from "next/image";
import React, { useState } from "react";

const PaymentMethod = ({
  setSelectedMehod,
  selectedMethod,
}: {
  selectedMethod: string;
  setSelectedMehod: Function;
}) => {
  return (
    <div className="flex sm:gap-6 gap-3">
      <div
        className={`flex sm:gap-4 gap-2 items-center border border-black py-5 sm:px-8 px-4 cursor-pointer ${
          selectedMethod === "credit" ? "bg-neutral-200" : ""
        } `}
        onClick={() => setSelectedMehod("credit")}
      >
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/128/4021/4021708.png"
          className="sm:h-10 sm:w-10 h-6 w-6"
        />
        <p className="sm:text-sm text-xs">Credit Card</p>
      </div>
      <div
        className={`flex sm:gap-4 gap-2 items-center border border-black py-5 sm:px-8 px-4 cursor-pointer ${
          selectedMethod === "cash" ? "bg-neutral-200" : ""
        } `}
        onClick={() => setSelectedMehod("cash")}
      >
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/128/4766/4766874.png"
          className="sm:h-10 sm:w-10 h-6 w-6"
        />
        <p className="sm:text-sm text-xs">Cash on Delivery</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
