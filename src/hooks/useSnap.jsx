import { icons } from "assets/icons/icons";

const useSnap = (setIconFunction) => {
    const inactiveSnap = () => {
        setIconFunction(icons.inactive.inactive);
        console.log("inactive");
    };

    const pointSnap = () => {
        setIconFunction(icons.inactive.point);
        console.log("point");
    };

    const segmentSnap = () => {
        setIconFunction(icons.inactive.segment);
        console.log("segment");
    };

    const polylineSnap = () => {
        setIconFunction(icons.inactive.polyligne);
        console.log("polyline");
    };

    return [inactiveSnap, pointSnap, segmentSnap, polylineSnap];
};

export default useSnap;
