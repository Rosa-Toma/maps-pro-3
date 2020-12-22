import { useState } from "react";
import { icons } from "assets/icons/icons";


const useDrawing = () => {
    const [drawingIcon, setDrawingIcon] = useState(icons.dessin.base);
    const circleDrawing = () => {
        setDrawingIcon(icons.dessin.cercle);
        console.log("circleDrawing");
    };

    const polylineDrawing = () => {
        setDrawingIcon(icons.dessin.polyligne);
        console.log("polylineDrawing");
    };

    const polygonDrawing = () => {
        setDrawingIcon(icons.dessin.polygone);
        console.log("polygonDrawing");
    };

    return [circleDrawing, polylineDrawing, polygonDrawing, drawingIcon];
};

export default useDrawing;
