import React from "react";

const ProgressCheckout = ({
  step2,
  step3,
}: {
  step2?: boolean;
  step3?: boolean;
}) => {
  return (
    <div className="mt-14 flex items-center justify-center">
      <div className="flex items-center justify-center">
        {/*this is 1 progress*/}
        <div className="h-8 w-8 rounded-full flex justify-center items-center border border-black">
          1
        </div>
        <p className="ml-4 text-lg">Shopping Cart</p>
      </div>
      <div className="h-[2px] bg-black w-[200px] ml-6 mr-6"></div>
      {/**/}
      <div className="flex items-center">
        <div
          className={`h-8 w-8 rounded-full flex justify-center items-center border ${
            step2 ? "border-black text-black" : "border-gray-300 text-gray-300"
          }`}
        >
          2
        </div>
        <p className={`ml-4 text-lg ${step2 ? "text-black" : "text-gray-300"}`}>
          Checkout
        </p>
      </div>
      <div
        className={`h-[2px] ${
          step3 ? "bg-black" : "bg-gray-300"
        } w-[200px] ml-6 mr-6`}
      ></div>
      <div className="flex items-center">
        <div
          className={`h-8 w-8 rounded-full flex justify-center items-center border ${
            step3 ? "border-black text-black" : "border-gray-300 text-gray-300"
          }`}
        >
          3
        </div>
        <p className={`ml-4 text-lg ${step3 ? "text-black" : "text-gray-300"}`}>
          Completed
        </p>
      </div>
    </div>
  );
};

export default ProgressCheckout;
