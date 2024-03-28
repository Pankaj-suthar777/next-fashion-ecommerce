import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/NavbarSearch";
import { Button } from "@/components/ui/button";
import React from "react";

const productData = [
  {
    img: "https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg",
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU",
    id: 2,
  },
  {
    img: "https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg",
    id: 3,
  },
  {
    img: "https://rukminim1.flixcart.com/image/300/300/xif0q/sweatshirt/h/9/5/s-women-s-hoodie-full-sleeve-solid-sweatshirt-hoodies-veolic-original-imagbf999bufug7z.jpeg",
    id: 4,
  },
  { img: "https://i.ibb.co/PcXVJ8m/studiobag.jpg", id: 5 },
  { img: "https://i.ibb.co/NtpJ0XQ/cumulus-olive.png", id: 6 },
  { img: "https://i.ibb.co/yRKyXPJ/dance-nylon.png", id: 7 },
  { img: "https://i.ibb.co/Br2W7F0/stratus-backpack.png", id: 8 },
  { img: "https://i.ibb.co/CPv6xTF/cirrus1.jpg", id: 9 },
  { img: "https://i.ibb.co/LNNw217/mini-circle.png", id: 10 },
  { img: "https://i.ibb.co/QmGdpLf/studio-bag-vaqueta.jpg", id: 11 },
  {
    img: "https://i.ibb.co/LzyPnF3/sling.png",
    id: 12,
  },
];

const ProductList = () => {
  return (
    <>
      <NavbarSearch type="search" />
      <div className="flex flex-col container gap-y-8 mt-5">
        <BreadcrumbDemo firstLink="/productlist" firstText="Product List" />
        <h1 className="font-bold text-xl text-center">Product List</h1>
      </div>
      <div className="grid grid-cols-6">
        <div className="row-span-4"></div>
        {productData.map((item) => (
          <div
            className={`p-4  flex flex-col items-center justify-center h-[330px]`}
          >
            <img
              className=" h-[150px] w-[150px] mb-2 object-cover"
              src={item.img}
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="font-semibold">Purple Sweatshirt</span>
              <span className="text-xs mt-1">$400</span>

              <Button className="rounded-none mt-4 text-xs">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
