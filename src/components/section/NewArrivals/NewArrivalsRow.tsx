import { Button } from "@/components/ui/button";
import React from "react";

const NewArrivalsRow = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">New Arrivals</h1>
        <h1 className="font-semibold text-sm">View all</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-2 h-[500px]">
        <div className="flex bg-slate-100 p-4 lg:col-span-2 col-span-4 items-center row-span-2">
          <img
            className="lg:w-[50%] w-[40% max-h-[300px]"
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/sweatshirt/k/b/t/l-rm-plain-hoodie-101-steel-grey-rammdut-enterprise-original-imagmb9mfqbqtghq.jpeg?q=90&crop=false"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold">Purple Sweatshirt</span>
            <span className="text-xs mt-1">$400</span>
            <Button className="rounded-none mt-4">Add to Cart</Button>
          </div>
        </div>
        <div className="p-4 bg-slate-100 flex flex-col items-center justify-center">
          <img
            className=" h-[90px] w-[90px] mb-2 object-cover"
            src="https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold">Purple Sweatshirt</span>
            <span className="text-xs mt-1">$400</span>
          </div>
        </div>
        <div className="p-4 bg-slate-100 flex flex-col items-center justify-center">
          <img
            className=" h-[90px] w-[90px] mb-2 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold">Purple Sweatshirt</span>
            <span className="text-xs mt-1">$400</span>
          </div>
        </div>
        <div className="p-4 bg-slate-100 flex flex-col items-center justify-center">
          <img
            className=" h-[90px] w-[90px] mb-2 object-cover"
            src="https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold">Purple Sweatshirt</span>
            <span className="text-xs mt-1">$400</span>
          </div>
        </div>
        <div className="p-4 bg-slate-100 flex flex-col items-center justify-center">
          <img
            className=" h-[90px] w-[90px] mb-2 object-cover"
            src="https://rukminim1.flixcart.com/image/300/300/xif0q/sweatshirt/h/9/5/s-women-s-hoodie-full-sleeve-solid-sweatshirt-hoodies-veolic-original-imagbf999bufug7z.jpeg"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold">Purple Sweatshirt</span>
            <span className="text-xs mt-1">$400</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalsRow;
