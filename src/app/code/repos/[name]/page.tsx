import React from "react";

import Repo from "@/app/components/Repo";
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
    <div>
      <Link href="/code/repos">Back</Link>

      <Repo name={name} />
    </div>
  );
};

export default RepoPage;
