import { UploadImage } from "@/app/utils/upload-image";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const image = formData.get("image") as unknown as File;

  const data = await UploadImage(image, "nextjs-images");

  return NextResponse.json({ image: data }, { status: 200 });
};
