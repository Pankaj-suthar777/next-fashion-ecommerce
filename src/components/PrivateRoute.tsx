"use client";
//import { useRouter } from "next/navigation";
import React from "react";
// import { useSelector } from "react-redux";
// import Spinner from "./Spinner";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const [loading, setIsLoading] = useState(true);

  // const { userInfo } = useSelector((state: any) => state.auth);
  // console.log("here", userInfo);

  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push("/auth/signin");
  //   }
  //   setIsLoading(true);
  // }, [userInfo]);

  // if (loading) {
  //   <div className="flex h-screen w-screen justify-center items-center">
  //     <Spinner />
  //   </div>;
  // }

  return <div>{children}</div>;
};

export default PrivateRoute;
