import { useState } from "react";

import { icons } from "assets/icons/icons";

const useDisplay = (setIconFunction) => {
    const [theme, setTheme] = useState("light");

    const mapState = () => {
        console.log("mapState");
    };

    const streetView = () => {
        setIconFunction(icons.vue.streetView);
        console.log("streetView");
    };

    const bingMaps = () => {
        setIconFunction(icons.vue.bingMaps);
        console.log("bingMaps");
    };

    const geoserverBackground = () => {
        setIconFunction(icons.vue.fondGeoserver);
        console.log("geoserverBackground");
    };

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme];
};

export default useDisplay;
