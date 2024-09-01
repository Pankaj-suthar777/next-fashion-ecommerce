"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signupSchema } from "@/schemas/signupSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PasswordInput } from "@/components/custom/password-input";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/register", data);
      toast({
        className: "bg-[#32de84] text-black",
        title: "User created successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "User already exist",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
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
                <h1 className="text-3xl self-start font-bold">Signup</h1>
                <p className="text-gray-400 text-sm mt-2 self-start">
                  Already have an account?{" "}
                  <span className="text-purple-800 text-md underline cursor-pointer">
                    <Link href="/auth/signin">Login</Link>
                  </span>
                </p>
                <div className="mt-10 w-full">
                  <FormField
                    control={form.control}
                    name="username"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} />
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
                          <PasswordInput
                            placeholder="Enter password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-10 w-full">
                  <Button
                    className="w-full py-6 bg-purple-700 flex justify-center items-center gap-2"
                    type="submit"
                  >
                    {loading && <Loader />} Signup
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex">
                <div className="flex justify-center items-center">
                  <img
                    alt=""
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1711793638~exp=1711797238~hmac=5a7054ebf4e8288cacffc3f06a9783517255b883bfdd94d9909da8478dd80f3b&w=740"
                    className="h-[500px] w-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Signup;
