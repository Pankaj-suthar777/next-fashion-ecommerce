import { connectDB } from "@/config/dbConfig";
import UserModel from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
connectDB();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const email = reqBody.email;

  const userExists = await UserModel.findOne({ email });

  if (!userExists) {
    return NextResponse.json({ message: "User not found", status: 400 });
  }
  //compare password
  const validPassword = await bcrypt.compare(
    reqBody.password,
    userExists.password
  );
  if (!validPassword) {
    throw new Error("Invalid password");
  }

  // create and assign token
  const token = jwt.sign({ userId: userExists._id }, process.env.jwt_secret);

  //send response
  return NextResponse.json({
    success: true,
    message: "User logged in successfully",
    token: token,
  });
}
