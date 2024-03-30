import { Button } from "@/components/ui/button";
import React from "react";

const NewArrivalsRow = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="sm:text-xl text-sm font-bold">New Arrivals</h1>
        <h1 className="font-semibold sm:text-sm text-xs">View all</h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-3 grid-rows-2 gap-x-2 gap-y-2 h-[500px]">
        <div className="flex bg-slate-100 sm:p-4 p-1 lg:col-span-2 col-span-4 items-center row-span-2">
          <img
            className="max-h-[300px] sm:w-fit w-[50%] "
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/sweatshirt/k/b/t/l-rm-plain-hoodie-101-steel-grey-rammdut-enterprise-original-imagmb9mfqbqtghq.jpeg?q=90&crop=false"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <span className="font-semibold sm:text-xl text-sm">
              Purple Sweatshirt
            </span>
            <span className="text-xs mt-1">$400</span>
            <Button className="rounded-none mt-4 sm:text-lg text-xs">
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="h-full w-full">
          <div className="p-4 bg-slate-100 flex flex-col items-center justify-center h-full w-full">
            <img
              className=" h-[90px] w-[90px] mb-2 object-cover"
              src="https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg"
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold sm:text-lg text-xs text-center">
                Purple Sweatshirt
              </span>
              <span className="text-xs mt-1">$400</span>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="p-4 bg-slate-100 flex flex-col items-center h-full w-full justify-center">
            <img
              className=" h-[90px] w-[90px] mb-2 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU"
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold sm:text-lg text-xs text-center">
                Purple Sweatshirt
              </span>
              <span className="text-xs mt-1">$400</span>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="p-4 bg-slate-100 flex flex-col items-center justify-center h-full w-full">
            <img
              className=" h-[90px] w-[90px] mb-2 object-cover"
              src="https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg"
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold sm:text-lg text-xs text-center">
                Purple Sweatshirt
              </span>
              <span className="text-xs mt-1">$400</span>
            </div>
          </div>
        </div>
        <div className="sm:block hidden h-full w-full">
          <div className="p-4 bg-slate-100 flex flex-col items-center justify-center h-full w-full">
            <img
              className=" h-[90px] w-[90px] mb-2 object-cover"
              src="https://rukminim1.flixcart.com/image/300/300/xif0q/sweatshirt/h/9/5/s-women-s-hoodie-full-sleeve-solid-sweatshirt-hoodies-veolic-original-imagbf999bufug7z.jpeg"
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold sm:text-lg text-xs text-center">
                Purple Sweatshirt
              </span>
              <span className="text-xs mt-1">$400</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalsRow;
