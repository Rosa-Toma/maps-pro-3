import { useState } from "react";
import { lightTheme, darkTheme } from "themes";
import { icons } from "assets/icons/icons";

const useTheme = () => {
    const [theme, setTheme] = useState("light");
    const [themeIcon, setThemeIcon] = useState(icons.theme.moon);
    const [themeData, setThemeData] = useState(lightTheme);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            setThemeIcon(icons.theme.sun);
            setThemeData(darkTheme);
        } else {
            setTheme("light");
            setThemeIcon(icons.theme.moon);
            setThemeData(lightTheme);
        }
    };

    return [themeIcon, themeData, toggleTheme];
};

export default useTheme;
