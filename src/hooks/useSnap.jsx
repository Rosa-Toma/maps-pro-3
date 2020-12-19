import { icons } from "assets/icons/icons";

const useSnap = (setIconFunction) => {
    const inactive = () => {
        setIconFunction(icons.inactive.inactive);
        console.log("inactive");
    };

    const point = () => {
        setIconFunction(icons.inactive.point);
        console.log("point");
    };

    const segment = () => {
        setIconFunction(icons.inactive.segment);
        console.log("segment");
    };

    const polyline = () => {
        setIconFunction(icons.inactive.polyligne);
        console.log("polyline");
    };

    return [inactive, point, segment, polyline];
};

export default useSnap;
