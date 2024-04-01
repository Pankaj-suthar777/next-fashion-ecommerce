"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { userInfo } = useSelector((state: any) => state.auth);
  console.log("here", userInfo);

  useEffect(() => {
    if (!userInfo) {
      router.push("/auth/signin");
    }
  }, [userInfo]);

  return <div>{children}</div>;
};

export default PrivateRoute;
