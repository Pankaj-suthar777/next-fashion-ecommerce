// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import React from "react";

// const productData = [
//   {
//     img: "https://image.dhgate.com/0x0/f2/albu/g17/M01/09/E1/rBVa4mHx5IiAQrUTAAo-m2KQPew218.jpg",
//     id: 1,
//     quantity: 1,
//     price: 100,
//     total: 100,
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTDgAmu5J8jSZKdAVyjsWACOeAHn5R6XmdFGLnNYBsgphaM5S4NUwPqJKAtqs4LJaW7o&usqp=CAU",
//     id: 2,
//     quantity: 1,
//     price: 100,
//     total: 100,
//   },
//   {
//     img: "https://img.ltwebstatic.com/images3_pi/2023/05/26/1685065381ad21a5fc681e35445c1c86fb6114de36_thumbnail_405x552.jpg",
//     id: 3,
//     quantity: 1,
//     price: 100,
//     total: 100,
//   },
// ];

// const CartProducts = () => {
//   return (
//     <div className="grid grid-cols-6 mt-[80px] overflow-y-scroll">
//       <div className="col-span-2">
//         <p className="text-gray-500 lg:text-md text-sm">Product</p>
//       </div>
//       <div className="flex justify-center items-center">
//         <p className="text-gray-500 lg:text-md text-sm">Quantity</p>
//       </div>
//       <div className="flex justify-center items-center">
//         <p className="text-gray-500 lg:text-md text-sm">Price</p>
//       </div>
//       <div className="flex justify-center items-center">
//         <p className="text-gray-500 lg:text-md text-sm">Total</p>
//       </div>
//       <div></div>
//       <Separator className="col-span-6 my-8" />

//       {productData.map((item, index) => (
//         <>
//           <CartProduct item={item} />
//           <Separator className="col-span-6 my-8" />
//         </>
//       ))}
//     </div>
//   );
// };

// const CartProduct = ({
//   item,
// }: {
//   item: {
//     img: string;
//     id: number;
//     quantity: number;
//     price: number;
//     total: number;
//   };
// }) => {
//   return (
//     <>
//       <div className="col-span-2 flex items-center lg:gap-x-16 gap-x-6">
//         <img
//           src={item.img}
//           className="lg:h-[120px] lg:w-[120px] h-[70px] w-[70px] object-cover border border-gray-300"
//         />
//         <p className="lg:text-lg text-sm font-medium">Gray T-shirt</p>
//       </div>

//       <div className="flex items-center justify-center">
//         <Button variant="outline" className="w-8 h-8  rounded-none bg-blue-100">
//           <i className="ri-subtract-line"></i>
//         </Button>
//         <span className="w-10 h-8 flex justify-center items-center border border-black">
//           {item.quantity}
//         </span>
//         <Button className="w-8 h-8 rounded-none">
//           <i className="ri-add-line"></i>
//         </Button>
//       </div>
//       <div className="flex justify-center items-center">
//         <p className="lg:text-lg text-sm font-medium">${item.price}</p>
//       </div>
//       <div className="flex justify-center items-center">
//         <p className="lg:text-lg text-sm font-medium">${item.total}</p>
//       </div>
//       <div className="flex justify-center items-center">
//         <i className="ri-close-line lg:text-2xl text-lg"></i>
//       </div>
//     </>
//   );
// };

// export default CartProducts;
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
    <div className="grid grid-cols-6 sm:mt-[80px] mt-[40px] overflow-x-auto overflow-y-auto min-w-[600px]">
      <div className="col-span-2 ">
        <p className="text-gray-500 lg:text-md text-sm">Product</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Quantity</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Price</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-500 lg:text-md text-sm">Total</p>
      </div>
      <div></div>
      <Separator className="col-span-6 my-8" />

      {productData.map((item, index) => (
        <React.Fragment key={index}>
          <CartProduct item={item} />
          <Separator className="col-span-6 my-8" />
        </React.Fragment>
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
      <div className="col-span-2 flex items-center lg:gap-x-16 gap-x-6">
        <img
          src={item.img}
          className="lg:h-[120px] lg:w-[120px] h-[70px] w-[70px] object-cover border border-gray-300"
        />
        <p className="lg:text-lg text-sm font-medium">Gray T-shirt</p>
      </div>

      <div className="flex items-center justify-center">
        <Button variant="outline" className="w-8 h-8  rounded-none bg-blue-100">
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
        <p className="lg:text-lg text-sm font-medium">${item.price}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="lg:text-lg text-sm font-medium">${item.total}</p>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <div className="cursor-pointer border px-2">
          <i className="ri-edit-line lg:text-2xl text-lg"></i>
        </div>
        <div className="cursor-pointer border px-2">
          <i className="ri-close-line lg:text-2xl text-xl"></i>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
