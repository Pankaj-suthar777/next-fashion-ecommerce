import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModal";
import { NextRequest, NextResponse } from "next/server";

connectDB();
export async function DELETE(
  request: NextRequest,
  { params }: { params: { productid: string } }
) {
  try {
    console.log(params.productid);
    await Product.deleteOne({ _id: params.productid });

    return NextResponse.json(
      { message: "product deleted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { productid: string } }
) {
  try {
    const reqBody = await request.json();
    await Product.updateOne({ _id: params.productid }, reqBody);

    return NextResponse.json(
      { message: "product updated successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
