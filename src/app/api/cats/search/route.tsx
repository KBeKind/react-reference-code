import { NextRequest, NextResponse } from "next/server";
import catStuff from "../data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  //   console.log(searchParams);
  //   console.log(searchParams.get("query"));
  //   console.log(searchParams.get("otherThing"));

  // filters based on URL: http://localhost:3000/api/cats/search?query=SEARCHPARAM   <-have the search param directly there
  const query = searchParams.get("query");
  if (query === null) {
  } else {
    const filteredCatStuff = catStuff.filter((aCatStuff) => {
      return aCatStuff.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredCatStuff);
  }

  return NextResponse.json(catStuff);
}
