import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

//React server component

// if it is a server component that is fetching data then the default loading page will display while it is loading

// fetching repos from github
async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/KBeKind/repos");
  const repos = await response.json();
  return repos;
}

// once repos are fetched then the data is mapped into code for renderedRepos
const ReposPage = async () => {
  let repoArray = [];
  const repos: Promise<Array<any>> = fetchRepos();
  const renderedRepos = await repos.then((repos) =>
    repos.map((repo) => (
      <li
        className="p-4 rounded-md
       bg-indigo-500 m-4"
      >
        <Link href={`/code/repos/${repo.name}`}>
          {repo.name}
          <p>{repo.description}</p>
          <div>
            <span>
              <FaStar /> {repo.stargazers_count}
            </span>
            <span>
              <FaCodeBranch /> {repo.forks_count}
            </span>
            <span>
              <FaEye /> {repo.watchers_count}
            </span>
          </div>
        </Link>
      </li>
    ))
  );

  return (
    <div className="p-4">
      Repositories:
      <ul>{renderedRepos}</ul>
    </div>
  );
};

export default ReposPage;
