import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return [theme, toggleTheme];
};
