import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

export default function NavLinks({
  mobile = false,
  onClick,
}) {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-6"
          : "hidden md:flex items-center gap-8"
      }
    >
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClick}
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-violet-400"
                : "text-zinc-300 hover:text-white"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}