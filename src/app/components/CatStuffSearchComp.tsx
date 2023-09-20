"use client";

import React from "react";
import { useState } from "react";

interface CatStuffSearchInterface {
  getSearchResults: Function;
}
//passing getSearchResults function prop from homepage
const CatStuffSearchComp = ({ getSearchResults }: CatStuffSearchInterface) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`/api/cats/search?query=${query}`);
    const catStuffs = await response.json();
    getSearchResults(catStuffs);
  };

  return (
    <div className="m-4 p-4 bg-green-700 text-slate-50">
      Cat Stuff Search
      <form
        onSubmit={handleSubmit}
        className="m-4 p-4 bg-green-500 text-slate-800"
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search Cat Stuff..."
          value={query}
          // as the user types it sets the query state variable
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default CatStuffSearchComp;
