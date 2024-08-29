import { connectDB } from "@/config/dbConfig";
import UserModel from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
connectDB();
const bcrypt = require("bcryptjs");

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const email = reqBody.email;
  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return NextResponse.json(
      { message: "User is already created" },
      { status: 400 }
    );
  }

  //hash password
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(reqBody.password, salt);
  reqBody.password = hashPassword;

  const user = await UserModel.create(reqBody);
  user.save();

  if (user) {
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "User is already created" },
      { status: 401 }
    );
  }
}
