import { Link, useLocation } from "react-router-dom";

export default function NavItem({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`
          text-xl flex items-center gap-2 hover:text-blue-700 transition
          ${isActive ? "text-blue-700" : ""}
          `}
      >
        {children}
      </Link>
    </li>
  );
}
