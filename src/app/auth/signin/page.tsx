"use client";
import { InputWithLabel } from "@/components/InputWithLabel";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCredentialsUser } from "@/app/redux/authSlice";
import { useDispatch } from "react-redux";
import Auth from "@/components/Auth";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "@/schemas/signinSchema";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", data);
      setLoading(false);
      if (response.data.status === 200) {
        toast({
          className: "bg-[#32de84] text-black",
          title: "User logged in successfully",
        });
        dispatch(setCredentialsUser(response.data.user));
        router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "User doesn't exist",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Somthing went wrong",
        description: error.message,
      });
    }
  };
  return (
    <Auth>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mt-5 w-full">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
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
          </div>
        </form>
      </Form>
    </Auth>
  );
};

export default SignIn;
