
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "./ui/switch";

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

  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="flex items-center gap-2">
      <Sun className={`w-5 h-5 ${isDark ? "text-muted" : "text-accent"}`} />
      <Switch checked={isDark} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
      <Moon className={`w-5 h-5 ${isDark ? "text-accent" : "text-muted"}`} />
    </div>
  );
}
