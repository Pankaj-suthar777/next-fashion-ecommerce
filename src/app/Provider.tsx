"use client";
import React from "react";
import store from "@/redux/store";
import { Provider as ProviderRedux } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ProviderRedux store={store}>{children}</ProviderRedux>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Provider;
