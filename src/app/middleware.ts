import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (
    token &&
    (url.pathname.startsWith("/auth/signin") ||
      url.pathname.startsWith("/auth/signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && url.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}
