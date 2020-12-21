import { useState } from "react";

const useDisplayTabPanel = () => {
    const [legendTabPanel, setLegendTabPanel] = useState(true);
    const [selectionTabPanel, setSelectionTabPanel] = useState(false);
    const [toolsTabPanel, setToolsTabPanel] = useState(false);
    const [localisationTabPanel, setLocalisationTabPanel] = useState(false);

    const displayLegendTabPanel = () => {
        setLegendTabPanel(true);
        setSelectionTabPanel(false);
        setToolsTabPanel(false);
        setLocalisationTabPanel(false);
    };

    const displaySelectionTabPanel = () => {
        setLegendTabPanel(false);
        setSelectionTabPanel(true);
        setToolsTabPanel(false);
        setLocalisationTabPanel(false);
    };

    const displayToolsTabPanel = () => {
        setLegendTabPanel(false);
        setSelectionTabPanel(false);
        setToolsTabPanel(true);
        setLocalisationTabPanel(false);
    };

    const displayLocalisationTabPanel = () => {
        setLegendTabPanel(false);
        setSelectionTabPanel(false);
        setToolsTabPanel(false);
        setLocalisationTabPanel(true);
    };

    return [legendTabPanel, displayLegendTabPanel, selectionTabPanel, displaySelectionTabPanel, toolsTabPanel, displayToolsTabPanel, localisationTabPanel, displayLocalisationTabPanel];
};

export default useDisplayTabPanel;
