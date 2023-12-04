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
    <div className="">
      {
        <img
          src={theme === "dark" ? "/moon.svg" : "sun.svg"}
          alt={theme === "dark" ? "Pasar a modo claro" : "Pasar a modo oscuro"}
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      }
    </div>
  );
};
