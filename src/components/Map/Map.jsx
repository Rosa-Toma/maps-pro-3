import { MapContainer } from "./styles";
import { useContext, useEffect } from "react";
import { MapContext } from "context/MapContext";

const Map = () => {
    const map = useContext(MapContext);

    useEffect(() => {
        map.setTarget("map");
    }, [map]);

    return <MapContainer id="map"></MapContainer>;
};

export default Map;
