import React from "react";

import RepoComp from "@/app/components/RepoComp";
import Link from "next/link";

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
      <RepoComp name={name} />
    </div>
  );
};

export default RepoPage;
