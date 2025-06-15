
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

// Utility to get the preferred theme on initial load
function getPreferredTheme() {
  if (typeof window === "undefined") return "light";
  if (localStorage.theme) return localStorage.theme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme());

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full p-2 transition hover:bg-graybg dark:hover:bg-zinc-800 border border-transparent hover:border-accent text-primary dark:text-accent bg-white dark:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-accent"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{ lineHeight: 0 }}
      type="button"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
