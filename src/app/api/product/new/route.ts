import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModal";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    // const { userId } = auth();

    // if (!userId)
    //   return NextResponse.json(
    //     { message: "unautherized request" },
    //     { status: 401 }
    //   );
    //  const mongoUserId = await getMongoDBUserIdOfLoggedInUser();
    const reqBody = await request.json();
    // reqBody.user = mongoUserId;

    const product = new Product(reqBody);
    await product.save();

    return NextResponse.json(
      { message: "Product created successfully", product: product },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
