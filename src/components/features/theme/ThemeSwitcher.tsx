import { memo, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = memo(() => {
  const [theme, setTheme] = useState<string | null>(null); // Default

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"; // Default
    if (theme !== storedTheme) setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, [theme]);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      aria-label="toggle theme"
      onClick={toggleTheme}
      className="w-6 rounded transition-all"
    >
      {theme === "light" ? (
        <Moon size={24} />
      ) : (
        <Sun className="text-primary" size={24} />
      )}
    </button>
  );
});

ThemeSwitcher.displayName = "ThemeSwitcher";
