import { connectDB } from "@/config/dbConfig";
import Product from "@/models/productModal";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    let filtersProduct: { category?: { $in: string[] }; price?: any } = {};

    if (reqBody?.filters?.category?.length > 0) {
      filtersProduct.category = { $in: reqBody.filters.category };
    }

    if (reqBody?.filters?.price?.length > 0) {
      if (!reqBody.filters.price.includes("any")) {
        const priceQuery = {
          $gte: Math.min(
            ...reqBody.filters.price.map((range) =>
              parseInt(range.split("-")[0])
            )
          ),
          $lte: Math.max(
            ...reqBody.filters.price.map((range) =>
              parseInt(range.split("-")[1])
            )
          ),
        };

        filtersProduct.price = priceQuery;
      }
    }

    let products;

    const sortBy =
      reqBody?.sortBy === "LTH"
        ? { price: 1 }
        : reqBody?.sortBy === "HTL"
        ? { price: -1 }
        : reqBody?.sortBy === "NEWLY"
        ? { createdAt: -1 }
        : null;

    if (reqBody.limit) {
      products = await Product.find({}).limit(reqBody.limit).lean();
    } else if (
      reqBody?.filters?.category?.[0] === "all" &&
      reqBody?.filters?.price
    ) {
      const { category, ...filtersWithoutCategory } = filtersProduct;
      console.log("1", filtersWithoutCategory);
      products = await Product.find(filtersWithoutCategory).sort(sortBy).lean();
    } else if (reqBody?.filters?.category?.[0] === "all") {
      products = await Product.find({}).sort(sortBy).lean();
    } else if (reqBody.filters) {
      products = await Product.find(filtersProduct).sort(sortBy).lean();
      console.log("2", filtersProduct);
    } else {
      products = await Product.find({}).sort(sortBy).lean();
    }

    return NextResponse.json(products, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
