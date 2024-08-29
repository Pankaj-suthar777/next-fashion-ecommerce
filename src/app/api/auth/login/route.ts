import { connectDB } from "@/config/dbConfig";
import UserModel from "@/models/userModal";
import { cookies } from "next/headers";
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

  if (validPassword) {
    const token = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    //set jwt as HTTP-Only cookie
    cookies().set("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });

    //send response
    return NextResponse.json({
      status: 200,
      message: "User logged in successfully",
      user: {
        _id: userExists._id,
        username: userExists.username,
        email: userExists.email,
        isAdmin: userExists.isAdmin,
      },
    });
  } else {
    // Handle invalid password case
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
}
