import React from "react";

const Card = ({
  para,
  title,
  img,
}: {
  para: string;
  title: string;
  img: string;
}) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center gap-y-6">
      <div className=" rounded-full border border-black w-[60px] h-[60px] flex justify-center items-center">
        <img src={img} className="h-8 w-8"></img>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-center text-xs text-slate-400 mt-4 w-[170px]">
          {para}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="w-full">
        <div className="font-bold sm:text-xl text-sm">Why Choose Us</div>
      </div>
      <div className="bg-slate-100 mt-8 grid md:grid-cols-4 grid-cols-2 gap-x-16 px-12 py-6">
        <Card
          para="This free shipping only for selected region"
          title="Free Delivery"
          img="https://cdn-icons-png.flaticon.com/128/819/819438.png"
        />
        <Card
          para="This free shipping only for selected region"
          title="Payment Method"
          img="https://cdn-icons-png.flaticon.com/128/1989/1989125.png"
        />
        <Card
          para="This free shipping only for selected region"
          title="Warranty"
          img="https://cdn-icons-png.flaticon.com/128/4400/4400863.png"
        />
        <Card
          para="This free shipping only for selected region"
          title="Customer Support"
          img="https://cdn-icons-png.flaticon.com/128/1067/1067566.png"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
