import { useState } from "react";

const useDisplay = () => {
    const [theme, setTheme] = useState("light");

    const mapState = () => {
        console.log("mapState");
    };

    const streetView = () => {
        console.log("streetView");
    };

    const bingMaps = () => {
        console.log("bingMaps");
    };

    const geoserverBackground = () => {
        console.log("geoserverBackground");
    };

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme];
};

export default useDisplay;
