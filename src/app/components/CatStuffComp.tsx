import React from "react";
import Link from "next/link";

interface CatStuffInterface {
  id: number;
  title: string;
  description: string;
}

// we are fetching json data but this could be a database or whatever instead

//fetching from my own api:
async function fetchCatStuff(/*params:type*/) {
  const response = await fetch("http://localhost:3000/api/cats");
  const catStuff = await response.json();
  return catStuff;
}

const CatStuffComp = async () => {
  const catStuff = await fetchCatStuff();
  return (
    <div className="p-4">
      {catStuff.map((aCatStuff: CatStuffInterface) => (
        <div key={aCatStuff.id} className="m-4 p-4 rounded bg-teal-600">
          <p>id: {aCatStuff.id}</p>
          <p>title: {aCatStuff.title}</p>
          <p>description: {aCatStuff.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CatStuffComp;
