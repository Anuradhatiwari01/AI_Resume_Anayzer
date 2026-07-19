import { useState } from "react";
import { Menu } from "lucide-react";

import Container from "./Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button className="hidden md:block">
              Get Started
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}ss