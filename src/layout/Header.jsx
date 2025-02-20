import { Link } from "react-router-dom";
import NavItem from "./NavItem";
export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center h-15">
      <Link to="/">Tvz.</Link>
      <nav>
        <ul className="flex gap-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/resume">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}
