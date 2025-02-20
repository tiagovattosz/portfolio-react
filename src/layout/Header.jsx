import { Link } from "react-router-dom";
import NavItem from "./NavItem";
export default function Header() {
  return (
    <header className="container mx-auto px-4 flex justify-between items-center h-15 sticky top-0 bg-white opacity-98">
      <Link to="/">Tvz.</Link>
      <nav>
        <ul className="flex gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}
