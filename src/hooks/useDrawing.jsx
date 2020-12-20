import { icons } from "assets/icons/icons";

const useDrawing = (setIconFunction) => {
    const circleDrawing = () => {
        setIconFunction(icons.dessin.cercle);
        console.log("circleDrawing");
    };

    const polylineDrawing = () => {
        setIconFunction(icons.dessin.polyligne);
        console.log("polylineDrawing");
    };

    const polygonDrawing = () => {
        setIconFunction(icons.dessin.polygone);
        console.log("polygonDrawing");
    };

    return [circleDrawing, polylineDrawing, polygonDrawing];
};

export default useDrawing;
