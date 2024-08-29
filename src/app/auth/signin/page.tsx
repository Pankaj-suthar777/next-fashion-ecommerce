"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
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
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignIn = () => {
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
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.email,
      password: data.password,
    });
    if (result?.error) {
      if (result.error == "CredentialsSignIn") {
        toast({
          title: "Login Failed",
          description: "Incorrect username or password",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    }
    setLoading(false);
    if (result?.url) {
      router.replace("/");
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
                <h1 className="text-3xl self-start font-bold">Login</h1>
                <p className="text-gray-400 text-sm mt-2 self-start">
                  {"Doesn't"} have an account yet?{" "}
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
                    alt="img"
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
  );
};

export default SignIn;
