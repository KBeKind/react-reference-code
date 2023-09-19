import React from "react";

import RepoComp from "@/app/components/RepoComp";
import Link from "next/link";
import CatFactsComp from "@/app/components/CatFactsComp";
import { Suspense } from "react";

// to get the name for the page we are passing
// in a prop and we are calling it "params"
// for typescript we use this interface

interface RepoPageProps {
  params: {
    name: string;
  };
}

const RepoPage = ({ params: { name } }: RepoPageProps) => {
  return (
    <div className="m-8">
      <Link
        href="/code/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </Link>
      <br />
      <br />
      {/* the Suspense with fallback are the placeholder
       for when a specific part of the page is still loading */}
      <Suspense
        fallback={
          <div>
            <p>Loading Repo Name For You</p>
          </div>
        }
      >
        {/* repo data is received quickly */}
        <RepoComp name={name} />
      </Suspense>
      <br />
      <hr />
      <br />

      {/* the Suspense with fallback are the placeholder
       for when a specific part of the page is still loading */}
      <Suspense
        fallback={
          <div>
            <p>Loading Cat Fact For You</p>
          </div>
        }
      >
        {/* cat fact data has a 3 second delay timer */}
        <CatFactsComp name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
