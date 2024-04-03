"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { userInfo } = useSelector((state: any) => state.auth);
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);
  return <div>{children}</div>;
};

export default Auth;
