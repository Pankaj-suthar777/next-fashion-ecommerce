import React from "react";

const ProgressCheckout = ({
  step2,
  step3,
}: {
  step2?: boolean;
  step3?: boolean;
}) => {
  return (
    <div className="sm:mt-14 mt-4 flex items-center justify-center">
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-y-0 gap-y-2 sm:mt-0 mt-5">
        {/*this is 1 progress*/}
        <div className="lg:h-8 lg:w-8 h-6 w-6 rounded-full flex justify-center items-center border border-black">
          1
        </div>
        <p className="lg:ml-4 sm:ml-2 ml-0 lg:text-lg sm:text-sm text-xs text-center sm:w-fit w-[80px]">
          Shopping Cart
        </p>
      </div>
      <div className="h-[2px] bg-black lg:w-[200px] md:w-[100px] sm:w-[100px] w-[45px] lg:ml-6 lg:mr-6 ml-3 mr-3"></div>
      {/**/}
      <div className="flex md:flex-row flex-col items-center md:gap-y-0 gap-y-2">
        <div
          className={`lg:h-8 lg:w-8 h-6 w-6 rounded-full flex justify-center items-center border ${
            step2 ? "border-black text-black" : "border-gray-300 text-gray-300"
          }`}
        >
          2
        </div>
        <p
          className={`lg:ml-4 sm:ml-2 ml-0 lg:text-lg sm:text-sm text-xs ${
            step2 ? "text-black" : "text-gray-300"
          }`}
        >
          Checkout
        </p>
      </div>
      <div
        className={`h-[2px] ${
          step3 ? "bg-black" : "bg-gray-300"
        } lg:w-[200px] md:w-[100px] sm:w-[100px] w-[45px]  lg:ml-6 lg:mr-6 ml-3 mr-3`}
      ></div>
      <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-2 items-center">
        <div
          className={`lg:h-8 lg:w-8 h-6 w-6 rounded-full flex justify-center items-center border ${
            step3 ? "border-black text-black" : "border-gray-300 text-gray-300"
          }`}
        >
          3
        </div>
        <p
          className={`lg:ml-4 sm:ml-2 ml-0 lg:text-lg sm:text-sm text-xs ${
            step3 ? "text-black" : "text-gray-300"
          }`}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

export default ProgressCheckout;
