import catStuff from "./data.json";
import { NextResponse } from "next/server";

export async function GET(request: JSON) {
  return NextResponse.json(catStuff);
}
