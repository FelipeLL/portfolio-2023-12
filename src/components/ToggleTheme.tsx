import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme";

export const ToggleTheme = () => {
  const { theme, setTheme } = useThemeStore((state) => state);

  useEffect(() => {
    switch (theme) {
      case "light":
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div>
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
