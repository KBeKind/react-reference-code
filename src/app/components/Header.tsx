import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      THIS is a friggan header
      <div className="bg-indigo-500">
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/about/team">The Team</Link>
      </div>
      <div>
        <Link href="/code/repos">Code</Link>
      </div>
    </header>
  );
};

export default Header;
