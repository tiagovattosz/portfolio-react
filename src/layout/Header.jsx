import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center text-lg h-13">
      <Link to="/">Tvz.</Link>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
