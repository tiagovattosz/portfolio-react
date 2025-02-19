import { Link } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <li>
      <Link to={to} className="hover:text-blue-700 transition">
        {children}
      </Link>
    </li>
  );
}
