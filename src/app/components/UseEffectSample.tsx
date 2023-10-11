"use client";
import { useEffect, useState } from "react";

const UseEffectSample = () => {
  const [resourceType, setResourceType] = useState("type1");
  const [items, setItems] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    //everything inside this useEffect function will be executed every time the application renders
    // in order to limit this we can send in an array that is of the resource type we want to check
    // when that resource is updated this will run
  }, [resourceType]);

  useEffect(() => {
    // you can leave an empty array as the second argument
    // this will make it only run on mount
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    // this causes the fetch to run and print out whatever
    // is fetched from the resource type when it is changed
    // this will happen on load as well because resourceType starts as nothing
    // this will only happen when the value of resourceType is changed
  }, [resourceType]);

  useEffect(() => {
    // this will only happen on mount
    window.addEventListener("resize", handleResize);
    // this does keep the event listener active for to respond and call the handleResize program

    // the return of the useEffect is essentially a cleanup.
    // it will run first before the code in the actual useEffect runs
    // it runs first so we can clean up what we did previously
    // the cleanup also runs anytime the component gets unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>UseEffectSample</div>;
};

export default UseEffectSample;
