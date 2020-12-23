import { Container } from "./styles";
import { useContext, useEffect } from "react";
import { MapContext } from "context/MapContext";

const Map = () => {
    const MAP = useContext(MapContext);

    useEffect(() => {
        MAP.setTarget("map");
    }, [MAP]);

    return <Container id="map"></Container>;
};

export default Map;
