import { InputWithLabel } from "@/components/InputWithLabel";
import { Separator } from "@/components/ui/separator";
import React from "react";
import PaymentMethod from "./PaymentMethod";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <div className="grid grid-cols-2 gap-x-24 mt-[70px]">
      <div>
        <h2>Buyer Info</h2>
        <Separator className="my-8" />
        <div className="space-y-8 w-full">
          <InputWithLabel
            id="FullName"
            label="Full Name"
            placeholder="Full Name"
            type="text"
          />
          <InputWithLabel
            id="address"
            label="Address"
            placeholder="Address"
            type="text"
          />

          <InputWithLabel
            id="city"
            label="City"
            placeholder="City"
            type="text"
          />
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <InputWithLabel
                id="state"
                label="State"
                placeholder="State"
                type="text"
              />
            </div>
            <InputWithLabel
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
        <PaymentMethod />
        <div className="space-y-6 mt-[30px]">
          <InputWithLabel
            label="Name on Card"
            id="nameoncard"
            placeholder=""
            type="text"
          />
          <div className="grid grid-cols-4 gap-x-6 gap-y-8">
            <div className="col-span-3">
              <InputWithLabel
                label="Card Number"
                id="cardnumber"
                placeholder=""
                type="number"
              />
            </div>
            <div className="col-span-1">
              <InputWithLabel
                label="CVV"
                id="cvv"
                placeholder=""
                type="number"
              />
            </div>
            <div className="col-span-2">
              <InputWithLabel
                label="Month"
                id="month"
                placeholder="Select Month"
                type="month"
              />
            </div>
            <div className="col-span-2">
              <InputWithLabel
                label="Year"
                id="year"
                placeholder="Enter Year"
                type="year"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-end mt-[40px]">
        <Button className="rounded-none px-11 py-4 text-sm">Checkout</Button>
      </div>
    </div>
  );
};

export default Form;
