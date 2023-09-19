import { resolve } from "path";
import React from "react";
import Link from "next/link";

interface RepoPageProps {
  name: string;
}
// utilize CatFact interface to match up the contents with the returned cat fact json object.
interface CatFact {
  fact: string;
  length: number;
}

async function fetchCatFactsContents(/*params:type*/) {
  // setting a timer so that we can utilize the "suspense boundary"
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // returns an object that has a fact property and a length property
  const response = await fetch("https://catfact.ninja/fact");

  const contents = await response.json();
  return contents;
}

const CatFactsComp = async ({ name }: RepoPageProps) => {
  // return json object as a CatFact object with a fact and length.
  const contents: CatFact = await fetchCatFactsContents();
  return (
    <div className="rounded bg-green-600">
      <p>{name}</p>
      <p>Cat Fact Info:</p>
      <p>{contents.fact}</p>
    </div>
  );
};

export default CatFactsComp;
