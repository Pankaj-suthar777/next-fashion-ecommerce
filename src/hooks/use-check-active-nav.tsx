// "use client";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function useCheckActiveNav() {
//   const router = useRouter();
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (router.isReady) {
//       setIsReady(true);
//     }
//   }, [router.isReady]);

//   const checkActiveNav = (nav: string) => {
//     if (!isReady) return false;

//     const pathArray = router.pathname.split("/").filter((item) => item !== "");

//     if (nav === "/" && pathArray.length < 1) return true;

//     return pathArray.includes(nav.replace(/^\//, ""));
//   };

//   return { checkActiveNav };
// }
