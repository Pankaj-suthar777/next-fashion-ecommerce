"use client";
import React from "react";
import store from "@/redux/store";
import { Provider as Pro } from "react-redux";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Pro store={store}>{children}</Pro>;
};

export default Provider;
