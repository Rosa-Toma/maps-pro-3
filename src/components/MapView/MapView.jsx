import { MapViewLayout } from "styles/MapView/MapViewLayout";
import { useContext, useEffect } from "react";
import { MapContext } from "context/MapContext";

export default function MapView() {
  const map = useContext(MapContext);
  useEffect(() => {
    map.setTarget("map");
  }, [map]);
  return <MapViewLayout id="map"></MapViewLayout>;
}
