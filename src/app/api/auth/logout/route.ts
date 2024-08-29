import { connectDB } from "@/config/dbConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export async function POST(request: NextRequest) {
  cookies().delete("jwt");

  return NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );
}
