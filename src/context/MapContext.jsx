import { createContext } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

const map = new Map({
    layers: [
        new TileLayer({
            source: new XYZ({
                url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            }),
        }),
    ],
    controls: [],
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});

const MapContext = createContext();

function MapContextProvider({ children }) {
    return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export { MapContextProvider, MapContext };
