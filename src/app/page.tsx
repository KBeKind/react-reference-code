import Link from "next/link";

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
    </div>
  );
};
export default HomePage;
