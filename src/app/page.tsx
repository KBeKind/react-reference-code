import Link from "next/link";

import CatStuffComp from "./components/CatStuffComp";

//By default all components are server components
// rendered on the server side

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

const HomePage = () => {
  return (
    <div>
      <p>Howdy :D</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">About Team</Link>
        </li>
      </ul>
      <CatStuffComp></CatStuffComp>
    </div>
  );
};
export default HomePage;
