import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    email: string;
    password?: string;
    username?: string;
    isAdmin: boolean;
  }
  interface Session {
    user: {
      _id?: string;
      email: string;
      password?: string;
      isAdmin: boolean;
      username?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    email: string;
    password?: string;
    isAdmin: boolean;
    username?: string;
  }
}
