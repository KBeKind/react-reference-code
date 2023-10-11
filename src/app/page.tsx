"use client"; // changing this to client component

import { useState, useEffect } from "react";
import CatStuffComp from "./components/CatStuffComp";
import LoadingPage from "./loading";
import CatStuffSearchComp from "./components/CatStuffSearchComp";

//By default all components are server components
// rendered on the server side
// we have set this to a client side component because it needs to hold state

// Advantages of React Server Component
// Fast loading, dont have to wait for JS to load
// smaller client bundle size
// SEO friendly
// Access to resources the client cant access
// Hide sensitive data from client
// more secure against cross site scripting attacks
// improved developer experience

//Disadvantages
// not as interactive
// no component state.  we cant use "useState" hook
// no component lifecycle methods, we cant use the "useEffect" hook

interface CatStuffInterface {
  id: number;
  title: string;
  description: string;
}

const HomePage = () => {
  //setting our state
  const [catStuff, setCatStuff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatStuffs = async (/*params:type*/) => {
      const response = await fetch("/api/cats");
      const data = await response.json();
      setCatStuff(data);
      setLoading(false);
    };
    fetchCatStuffs();
  }, []);
  // the blank array causes the useEffect to run only upon original load

  const getSearchResults = function (results: []) {
    setCatStuff(results);
  };

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <p>Howdy :D</p>
      <CatStuffSearchComp getSearchResults={getSearchResults} />
      {/* passing in the catStuff state into the CatStuffComp component */}
      <CatStuffComp catStuff={catStuff}></CatStuffComp>
    </div>
  );
};
export default HomePage;
