import { useState } from "react";

const useDisplayTabPanel = () => {
    const [hideLegend, setHideLegend] = useState(false);
    const [hideSelection, setHideSelection] = useState(true);
    const [hideTools, setHideTools] = useState(true);
    const [hideLocalisation, setHideLocalisation] = useState(true);

    const displayLegend = () => {
        setHideLegend(false);
        setHideSelection(true);
        setHideTools(true);
        setHideLocalisation(true);
    };

    const displaySelection = () => {
        setHideLegend(true);
        setHideSelection(false);
        setHideTools(true);
        setHideLocalisation(true);
    };

    const displayTools = () => {
        setHideLegend(true);
        setHideSelection(true);
        setHideTools(false);
        setHideLocalisation(true);
    };

    const displayLocalisation = () => {
        setHideLegend(true);
        setHideSelection(true);
        setHideTools(true);
        setHideLocalisation(false);
    };

    return [hideLegend, displayLegend, hideSelection, displaySelection, hideTools, displayTools, hideLocalisation, displayLocalisation];
};

export default useDisplayTabPanel;
