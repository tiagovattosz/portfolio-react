import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="h-20 grid grid-cols-3 items-center justify-center">
      <h3 className="text-center">Developed by Tiago Vattos Zamboni</h3>
      <h4 className="text-center">Copyright © {currentYear}</h4>
      <address className="flex gap-4 justify-center">
        <Link to="https://github.com/tiagovattosz">
          <FaGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/tiago-vattos-zamboni-680952232/">
          <FaLinkedinIn />
        </Link>
      </address>
    </footer>
  );
}
