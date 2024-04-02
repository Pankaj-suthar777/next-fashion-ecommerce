import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModal";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody.limit);
    let products;
    if (reqBody.limit) {
      products = await Product.find({}).limit(reqBody.limit).lean(); // Use lean() to convert to plain JavaScript object
    } else {
      products = await Product.find({}).sort({ createdAt: -1 }).lean(); // Use lean() to convert to plain JavaScript object
    }

    return NextResponse.json(products, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
