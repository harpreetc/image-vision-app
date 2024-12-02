import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const files = fs.readdirSync(uploadDir);

    // Filter image files (e.g., jpg, jpeg, png)
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    return NextResponse.json(imageFiles);
  } catch (error) {
    console.error("Error reading upload directory:", error);
    return NextResponse.json({ error: "Failed to load gallery" }, { status: 500 });
  }
}
