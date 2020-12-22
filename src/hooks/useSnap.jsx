import { useState } from "react";
import { icons } from "assets/icons/icons";

const useSnap = () => {
    const [snapIcon, setSnapIcon] = useState(icons.inactive.inactive);
    const inactiveSnap = () => {
        setSnapIcon(icons.inactive.inactive);
        console.log("inactive");
    };

    const pointSnap = () => {
        setSnapIcon(icons.inactive.point);
        console.log("point");
    };

    const segmentSnap = () => {
        setSnapIcon(icons.inactive.segment);
        console.log("segment");
    };

    const polylineSnap = () => {
        setSnapIcon(icons.inactive.polyligne);
        console.log("polyline");
    };

    return [inactiveSnap, pointSnap, segmentSnap, polylineSnap, snapIcon];
};

export default useSnap;
