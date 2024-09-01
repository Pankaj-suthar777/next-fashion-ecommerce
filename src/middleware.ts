// import { NextRequest, NextResponse } from "next/server";
// export { default } from "next-auth/middleware";
// import { getToken } from "next-auth/jwt";
// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const url = request.nextUrl;
//   if (
//     token &&
//     (url.pathname.startsWith("/auth/signin") ||
//       url.pathname.startsWith("/auth/signup"))
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   if (!token && url.pathname.startsWith("/")) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url));
//   }

//   return NextResponse.next();
// }
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // Redirect to dashboard if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
  if (
    token &&
    (url.pathname.startsWith("/auth/signin") ||
      url.pathname.startsWith("/auth/signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // for admin
  if (url.pathname.startsWith("/admin")) {
    if (!token?.isAdmin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
