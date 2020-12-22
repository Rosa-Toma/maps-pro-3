import { useState } from "react";

import { icons } from "assets/icons/icons";

const useDisplay = () => {
    const [viewIcon, setViewIcon] = useState(icons.vue.streetView);

    
    const [theme, setTheme] = useState("light");

    const mapState = () => {
        console.log("mapState");
    };

    const streetView = () => {
        setViewIcon(icons.vue.streetView);
        console.log("streetView");
    };

    const bingMaps = () => {
        setViewIcon(icons.vue.bingMaps);
        console.log("bingMaps");
    };

    const geoserverBackground = () => {
        setViewIcon(icons.vue.fondGeoserveur);
        console.log("geoserverBackground");
    };

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme, viewIcon];
};

export default useDisplay;
