import catStuff from "./data.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: JSON) {
  return NextResponse.json(catStuff);
}

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();

  console.log(title, description);

  return NextResponse.json({ message: "A Cat Stuff Created" });
}
