import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center fixed"
      style={{
        backgroundImage:
          'url("https://cdn.wallpapersafari.com/12/79/iQeBup.jpg")',
      }}
    >
      <div className="bg-white w-[90%] max-w-[1200px] rounded-lg">
        <div className="grid lg:grid-cols-2 md:gap-16 md:px-16 py-10">
          <div className="px-6 py-8 flex flex-col justify-center items-center">
            <h1 className="text-3xl self-start font-bold">Login</h1>
            <p className="text-gray-400 text-sm mt-2 self-start">
              Doesn't have an account yet?{" "}
              <span className="text-purple-800 text-md underline cursor-default">
                <Link href="/auth/signup">Sign Up</Link>
              </span>
            </p>
            <div className="mt-10 w-full">
              <InputWithLabel
                id="email"
                label="Email Address"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="mt-5 w-full">
              <InputWithLabel
                id="password"
                label="Password"
                placeholder="Enter a 6 character or more"
                type="password"
              />
            </div>
            <div className="mt-10 w-full">
              <Button className="w-full py-6 bg-purple-700">Login</Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <div className="flex justify-center items-center">
              <img
                src="https://img.freepik.com/premium-vector/security-password-concept-illustration_251005-470.jpg?w=826"
                className="h-[500px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
