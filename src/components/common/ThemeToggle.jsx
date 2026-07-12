import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      className="
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-2
        transition
        hover:bg-white/10
      "
    >
      <Sun size={18} />
    </button>
  );
}