import { Link } from "react-router-dom";

import Container from "./Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-zinc-300 transition hover:text-white"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-zinc-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#contact"
            className="text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}