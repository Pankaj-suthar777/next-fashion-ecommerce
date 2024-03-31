"use client";
import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useState } from "react";
import { UserCredentials } from "../signup/page";
import Loader from "@/components/Loader";
import axios from "axios";

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [credentials, setCredentials] = useState<UserCredentials>({
    password: "",
    email: "",
  });

  function passwordHandler(e: any) {
    setCredentials((pre: UserCredentials) => ({
      ...pre,
      password: e.target.value,
    }));
  }

  function emailHandler(e: any) {
    setCredentials((pre: UserCredentials) => ({
      ...pre,
      email: e.target.value,
    }));
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", credentials);
      setLoading(false);
      if (response.status === 200) {
        toast({
          className: "bg-[#32de84] text-black",
          title: "User logged in successfully",
        });
      }
    } catch (error) {}
  };
  return (
    <div
      className="h-screen w-screen flex justify-center items-center fixed"
      style={{
        backgroundImage:
          'url("https://cdn.wallpapersafari.com/12/79/iQeBup.jpg")',
      }}
    >
      <form onSubmit={onSubmit}>
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
                  value={credentials.email}
                  onChange={emailHandler}
                  id="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="mt-5 w-full">
                <InputWithLabel
                  value={credentials.password}
                  onChange={passwordHandler}
                  id="password"
                  label="Password"
                  placeholder="Enter a 6 character or more"
                  type="password"
                />
              </div>
              <div className="mt-10 w-full">
                <Button className="w-full py-6 bg-purple-700 flex justify-center items-center gap-2">
                  {loading && <Loader />}Login
                </Button>
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
      </form>
    </div>
  );
};

export default SignIn;
