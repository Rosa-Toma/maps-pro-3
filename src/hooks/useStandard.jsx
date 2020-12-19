import { icons } from "assets/icons/icons";

const useStandard = (setIconFunction) => {
    const pointSelection = () => {
        setIconFunction(icons.selection.pointEtRectangle);
    };

    const circleSelection = () => {
        setIconFunction(icons.selection.cercle);
    };

    const polygonSelection = () => {
        setIconFunction(icons.selection.polygonale);
    };

    const freeSelection = () => {
        setIconFunction(icons.selection.libre);
    };

    const undo = () => {
        console.log("undo");
    };

    const redo = () => {
        console.log("redo");
    };

    return [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo];
};

export default useStandard;
