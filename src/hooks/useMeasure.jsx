import { useState } from "react";
import { icons } from "assets/icons/icons";

const useMeasure = () => {
    const [measureIcon, setMeasureIcon] = useState(icons.mesure.distance);
    const distanceMeasurement = () => {
        setMeasureIcon(icons.mesure.distance);
        console.log("distance measurement");
    };

    const surfaceMeasurement = () => {
        setMeasureIcon(icons.mesure.surface);
        console.log("surface measurement");
    };

    const bufferMeasurement = () => {
        setMeasureIcon(icons.mesure.buffer);
        console.log("buffer measurement");
    };

    const translater = () => {
        setMeasureIcon(icons.mesure.translater);
        console.log("translater");
    };

    const edit = () => {
        setMeasureIcon(icons.mesure.modifier);
        console.log("edit");
    };

    return [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit, measureIcon];
};

export default useMeasure;
