import React from "react";
import Link from "next/link";

interface RepoPageProps {
  name: string;
}

// async function fetchRepo(name: string) {
//   const response = await fetch(`https://api.github.com/repos/kbekind/${name}`);
//   const repo = await response.json();
//   console.log(repo);
//   return repo;
// }

const RepoComp = async ({ name }: RepoPageProps) => {
  return (
    <div>
      <p> Repo: {name} </p>

      <p>information about the {name} repo...</p>
    </div>
  );
};

export default RepoComp;
