import React from "react";

const ProgressCheckout = () => {
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
        <div className="h-8 w-8 rounded-full flex justify-center items-center border border-black">
          1
        </div>
        <p className="ml-4 text-lg">Checkout</p>
      </div>
      <div className="h-[2px] bg-black w-[200px] ml-6 mr-6"></div>
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full flex justify-center items-center border border-black">
          1
        </div>
        <p className="ml-4 text-lg">Completed</p>
      </div>
    </div>
  );
};

export default ProgressCheckout;
