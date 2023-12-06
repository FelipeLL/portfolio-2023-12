import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme";

export const ToggleTheme = () => {
  const { theme, setTheme } = useThemeStore((state) => state);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <img src="/moon.svg" alt="Pasar a modo claro" />
      ) : (
        <img src="/sun.svg" alt="Pasar a modo oscuro" />
      )}
    </div>
  );
};
