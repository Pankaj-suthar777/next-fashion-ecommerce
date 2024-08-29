"use client";
import InputWithLabel from "@/components/layout/input-with-label";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import PaymentMethod from "./payment-method";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Form = () => {
  const [selectedMethod, setSelectedMehod] = useState("credit");
  const { data } = useSession();
  return !data?.user ? (
    <div className="flex mt-10 justify-center items-center">
      <Alert variant="destructive" className="flex gap-5">
        <i className="ri-error-warning-line text-3xl"></i>
        <div>
          <Link href="/auth/signin">
            <AlertTitle className="underline">Login Please!</AlertTitle>
          </Link>
          <AlertDescription>
            You have to login in order to checkout
          </AlertDescription>
        </div>
      </Alert>
    </div>
  ) : (
    <div className="lg:grid grid-cols-2 lg:gap-y-0 gap-y-8 flex flex-col gap-x-24 sm:mt-[70px] mt-[40px]">
      <div>
        <h2>Buyer Info</h2>
        <Separator className="my-8" />
        <div className="space-y-8 w-full">
          <InputWithLabel
            value="no"
            id="FullName"
            label="Full Name"
            placeholder="Full Name"
            type="text"
          />
          <InputWithLabel
            value="no"
            id="address"
            label="Address"
            placeholder="Address"
            type="text"
          />

          <InputWithLabel
            value="no"
            id="city"
            label="City"
            placeholder="City"
            type="text"
          />
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <InputWithLabel
                value="no"
                id="state"
                label="State"
                placeholder="State"
                type="text"
              />
            </div>
            <InputWithLabel
              value={78}
              id="zip"
              label="Zip Code"
              placeholder="Zip Code"
              type="number"
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Payment Method</h2>
        <Separator className="my-8" />
        <PaymentMethod
          selectedMethod={selectedMethod}
          setSelectedMehod={setSelectedMehod}
        />
        {selectedMethod === "credit" ? (
          <div className="space-y-6 mt-[30px]">
            <InputWithLabel
              label="Name on Card"
              id="nameoncard"
              placeholder=""
              type="text"
              value="no"
            />
            <div className="grid grid-cols-4 gap-x-6 gap-y-8">
              <div className="col-span-3">
                <InputWithLabel
                  label="Card Number"
                  id="cardnumber"
                  placeholder=""
                  type="number"
                  value={787}
                />
              </div>
              <div className="col-span-1">
                <InputWithLabel
                  value={8787}
                  label="CVV"
                  id="cvv"
                  placeholder=""
                  type="number"
                />
              </div>
              <div className="col-span-2">
                <InputWithLabel
                  value="june"
                  label="Month"
                  id="month"
                  placeholder="Select Month"
                  type="month"
                />
              </div>
              <div className="col-span-2">
                <InputWithLabel
                  value={67}
                  label="Year"
                  id="year"
                  placeholder="Enter Year"
                  type="year"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="col-span-2 flex justify-end sm:mt-[40px] mt-[5px]">
        <Button className="rounded-none px-11 py-4 text-sm">Checkout</Button>
      </div>
    </div>
  );
};

export default Form;
