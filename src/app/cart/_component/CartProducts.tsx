import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const productData = [
  {
    img: "https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg",
    id: 1,
    quantity: 1,
    price: 100,
    total: 100,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU",
    id: 2,
    quantity: 1,
    price: 100,
    total: 100,
  },
  {
    img: "https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg",
    id: 3,
    quantity: 1,
    price: 100,
    total: 100,
  },
];

const CartProducts = () => {
  return (
    <div className="grid grid-cols-6 mt-[80px]">
      <div className="col-span-2">
        <p className="text-gray-500">Product</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500">Quantity</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500">Price</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500">Total</p>
      </div>
      <div></div>
      <Separator className="col-span-6 my-8" />

      {productData.map((item, index) => (
        <>
          <CartProduct item={item} />
          <Separator className="col-span-6 my-8" />
        </>
      ))}
    </div>
  );
};

const CartProduct = ({
  item,
}: {
  item: {
    img: string;
    id: number;
    quantity: number;
    price: number;
    total: number;
  };
}) => {
  return (
    <>
      <div className="col-span-2 flex items-center gap-x-16">
        <img
          src={item.img}
          className="h-[120px] w-[120px] object-cover border border-gray-300"
        />
        <p className="text-lg font-medium">Gray T-shirt</p>
      </div>

      <div className="flex items-center justify-center">
        <Button variant="outline" className="w-8 h-8 rounded-none bg-blue-100">
          <i className="ri-subtract-line"></i>
        </Button>
        <span className="w-10 h-8 flex justify-center items-center border border-black">
          {item.quantity}
        </span>
        <Button className="w-8 h-8 rounded-none">
          <i className="ri-add-line"></i>
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-lg font-medium">${item.price}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-lg font-medium">${item.total}</p>
      </div>
      <div className="flex justify-center items-center">
        <i className="ri-close-line text-2xl"></i>
      </div>
    </>
  );
};

export default CartProducts;
