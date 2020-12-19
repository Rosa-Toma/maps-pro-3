import { icons } from "assets/icons/icons";

const useMeasure = (setIconFunction) => {
    const distanceMeasurement = () => {
        setIconFunction(icons.mesure.distance);
        console.log("distance measurement");
    };

    const surfaceMeasurement = () => {
        setIconFunction(icons.mesure.surface);
        console.log("surface measurement");
    };

    const bufferMeasurement = () => {
        setIconFunction(icons.mesure.buffer);
        console.log("buffer measurement");
    };

    const translater = () => {
        setIconFunction(icons.mesure.translater);
        console.log("translater");
    };

    const edit = () => {
        setIconFunction(icons.mesure.modifier);
        console.log("edit");
    };

    return [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit];
};

export default useMeasure;
