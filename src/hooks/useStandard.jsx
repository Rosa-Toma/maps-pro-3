import { icons } from "assets/icons/icons";
import { useState } from "react";

const useStandard = () => {
    const [selectionIcon, setSelectionIcon] = useState(icons.selection.pointEtRectangle);
    const pointSelection = () => {
        setSelectionIcon(icons.selection.pointEtRectangle);
    };

    const circleSelection = () => {
        setSelectionIcon(icons.selection.cercle);
    };

    const polygonSelection = () => {
        setSelectionIcon(icons.selection.polygonale);
    };

    const freeSelection = () => {
        setSelectionIcon(icons.selection.libre);
    };

    const undo = () => {
        console.log("undo");
    };

    const redo = () => {
        console.log("redo");
    };

    return [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo, selectionIcon];
};

export default useStandard;
