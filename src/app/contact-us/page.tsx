import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-screen grid xl:grid-cols-4 py-[100px] gap-24 md:px-[100px] px-8">
      <div className="col-span-2 xl:flex hidden justify-center items-center">
        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1711879534~exp=1711883134~hmac=4f5a592cecad0699f197984b18aebe928fc04189c5aaa1341365fad9d5c292c0&w=740" />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <h1
          className="text-7xl font-normal text-center"
          style={{ fontFamily: "serif" }}
        >
          Contact Us
        </h1>
        <div className="flex md:flex-row flex-col gap-24 mt-[70px] xl:w-full w-[70vw] justify-center items-center">
          <div className="space-y-6 w-[100%]">
            <div className="space-y-4 ">
              <Label htmlFor="fn">Full Name</Label>
              <Input
                placeholder="Full Name"
                className="border border-black h-12"
                id="fn"
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="em">Email</Label>
              <Input
                placeholder="E-mail"
                className="border border-black h-12"
                id="em"
              />
            </div>
            <div className="space-y-4 pb-[30px]">
              <Label htmlFor="m">Message</Label>
              <Input
                placeholder="Message"
                className="border border-black h-12"
                id="m"
              />
            </div>
            <Button className="rounded-full py-7 px-20 text-xl">
              Contact Us
            </Button>
          </div>
          <div className="md:space-y-8 self-start grid gap-12">
            <div className="flex justify-center items-start flex-col">
              <h1 className="font-semibold text-xl">Contact</h1>
              <p className="text-lg font-normal">hi@gmail.com</p>
            </div>
            <div className="flex justify-center items-start flex-col ">
              <h1 className="font-semibold text-xl">Based in</h1>
              <p className="text-lg font-normal">New York</p>
              <p className="text-lg font-normal">California, Ohio</p>
            </div>

            <div className="flex lg:gap-x-16 gap-x-8">
              <i className="ri-facebook-circle-line lg:text-4xl text-2xl cursor-pointer"></i>
              <i className="ri-instagram-line lg:text-4xl text-2xl cursor-pointer"></i>
              <i className="ri-twitter-x-line lg:text-4xl text-2xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
