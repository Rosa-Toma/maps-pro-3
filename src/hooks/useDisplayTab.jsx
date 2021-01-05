import { useState } from "react";

const useDisplayTab = () => {
    const [isLegendTabHide, setIsLegendTabHide] = useState(false);
    const [isSelectionTabHide, setIsSelectionTabHide] = useState(true);
    const [isToolsTabHide, setIsToolsTabHide] = useState(true);
    const [isLocalisationTabHide, setIsLocalisationHideHide] = useState(true);

    const displayLegendTab = () => {
        setIsLegendTabHide(false);
        setIsSelectionTabHide(true);
        setIsToolsTabHide(true);
        setIsLocalisationHideHide(true);
    };

    const displaySelectionTab = () => {
        setIsLegendTabHide(true);
        setIsSelectionTabHide(false);
        setIsToolsTabHide(true);
        setIsLocalisationHideHide(true);
    };

    const displayToolsTab = () => {
        setIsLegendTabHide(true);
        setIsSelectionTabHide(true);
        setIsToolsTabHide(false);
        setIsLocalisationHideHide(true);
    };

    const displayLocalisationTab = () => {
        setIsLegendTabHide(true);
        setIsSelectionTabHide(true);
        setIsToolsTabHide(true);
        setIsLocalisationHideHide(false);
    };

    return [
        isLegendTabHide,
        displayLegendTab,
        isSelectionTabHide,
        displaySelectionTab,
        isToolsTabHide,
        displayToolsTab,
        isLocalisationTabHide,
        displayLocalisationTab,
    ];
};

export default useDisplayTab;
