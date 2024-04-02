import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModal";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export async function GET(request: NextRequest) {
  try {
    const products = await Product.find({});
    //reqBody.user = mongoUserId;

    return NextResponse.json(products, { status: 201 });
  } catch (error: any) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
