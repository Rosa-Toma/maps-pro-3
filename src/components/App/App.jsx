import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Header, HeaderLogo, HeaderTabs } from "components/Header";
import { Tab, Tool } from "components/Shared";
import { Sidebar, SidebarTabs, TabList, TabPanel, TabDropdown } from "components/Sidebar";
import { Toolbar, ToolbarTools } from "components/Toolbar";
import { MapView } from "components/MapView";

import { GlobalStyles } from "styles/global";
import { AppLayout } from "./styles";
import { lightTheme, darkTheme } from "styles/theme";

import { icons } from "assets/icons/icons";

import { MapContext } from "context/MapContext";
import { useStandard, useNavigation, useMeasure, useSnap, useDrawing, useGuide, useDisplay, useDisplayTabPanel } from "hooks";

function App() {
    const MAP = useContext(MapContext);

    const [selectionIcon, setSelectionIcon] = useState(icons.selection.pointEtRectangle);
    const [measureIcon, setMeasureIcon] = useState(icons.mesure.distance);
    const [snapIcon, setSnapIcon] = useState(icons.inactive.inactive);
    const [drawingIcon, setDrawingIcon] = useState(icons.dessin.base);
    const [viewIcon, setViewIcon] = useState(icons.vue.streetView);

    const [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo] = useStandard(setSelectionIcon);
    const [panoter, zoomIn, zoomOut, recenter] = useNavigation(MAP);
    const [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit] = useMeasure(setMeasureIcon);
    const [inactiveSnap, pointSnap, segmentSnap, polylineSnap] = useSnap(setSnapIcon);
    const [circleDrawing, polylineDrawing, polygonDrawing] = useDrawing(setDrawingIcon);
    const [tangentGuide, normalGuide] = useGuide();
    const [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme] = useDisplay(setViewIcon);

    const [
        legendTabPanel,
        displayLegendTabPanel,
        selectionTabPanel,
        displaySelectionTabPanel,
        toolsTabPanel,
        displayToolsTabPanel,
        localisationTabPanel,
        displayLocalisationTabPanel,
    ] = useDisplayTabPanel();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppLayout>
                <Header>
                    <HeaderLogo />
                    <HeaderTabs>
                        <Tab title="Carte" />
                        <Tab title="Recherche" />
                        <Tab title="information" />
                        <Tab title="compte" />
                    </HeaderTabs>
                </Header>
                <Sidebar>
                    <SidebarTabs>
                        <TabList>
                            <Tab title="légende" onClick={displayLegendTabPanel} />
                            <Tab title="sélection" onClick={displaySelectionTabPanel} />
                            <Tab title="outils" onClick={displayToolsTabPanel} />
                            <Tab title="localisation" onClick={displayLocalisationTabPanel} />
                        </TabList>
                        {legendTabPanel ? (
                            <TabPanel>
                                <TabDropdown title="création ">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                                <TabDropdown title="coquille">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                            </TabPanel>
                        ) : null}
                        {selectionTabPanel ? (
                            <TabPanel>
                                <TabDropdown title="création objets">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                                <TabDropdown title="impression">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                            </TabPanel>
                        ) : null}
                        {toolsTabPanel ? (
                            <TabPanel>
                                <TabDropdown title="test3">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                                <TabDropdown title="impression">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                            </TabPanel>
                        ) : null}
                        {localisationTabPanel ? (
                            <TabPanel>
                                <TabDropdown title="test4">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                                <TabDropdown title="impression">
                                    <Tool title="point" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                                    <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                                    <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                                    <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                                </TabDropdown>
                            </TabPanel>
                        ) : null}
                    </SidebarTabs>
                </Sidebar>
                <Toolbar>
                    <ToolbarTools title="standard">
                        <Tool title="sélection" icon={selectionIcon}>
                            <Tool title="point et rectangle" icon={icons.selection.pointEtRectangle} action={pointSelection} />
                            <Tool title="cercle" icon={icons.selection.cercle} action={circleSelection} />
                            <Tool title="polygonale" icon={icons.selection.polygonale} action={polygonSelection} />
                            <Tool title="libre" icon={icons.selection.libre} action={freeSelection} />
                        </Tool>
                        <Tool title="annuler" icon={icons.annuler} action={undo} />
                        <Tool title="refaire" icon={icons.refaire} action={redo} />
                    </ToolbarTools>
                    <ToolbarTools title="navigation">
                        <Tool title="panoter" icon={icons.panoter} action={panoter} />
                        <Tool title="zoomer" icon={icons.zoomer} action={zoomIn} />
                        <Tool title="dézoomer" icon={icons.dezoomer} action={zoomOut} />
                        <Tool title="recentrer" icon={icons.recentrer} action={recenter} />
                    </ToolbarTools>
                    <ToolbarTools title="outils">
                        <Tool title="mesure" icon={measureIcon}>
                            <Tool title="distance" icon={icons.mesure.distance} action={distanceMeasurement} />
                            <Tool title="surface" icon={icons.mesure.surface} action={surfaceMeasurement} />
                            <Tool title="buffer" icon={icons.mesure.buffer} action={bufferMeasurement} />
                            <Tool title="translater" icon={icons.mesure.translater} action={translater} />
                            <Tool title="modifier" icon={icons.mesure.modifier} action={edit} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="accroche">
                        <Tool title="accroche" icon={snapIcon}>
                            <Tool title="inactive" icon={icons.inactive.inactive} action={inactiveSnap} />
                            <Tool title="point" icon={icons.inactive.point} action={pointSnap} />
                            <Tool title="segment" icon={icons.inactive.segment} action={segmentSnap} />
                            <Tool title="polyligne" icon={icons.inactive.polyligne} action={polylineSnap} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="dessin">
                        <Tool title="dessin" icon={drawingIcon}>
                            <Tool title="cercle" icon={icons.dessin.cercle} action={circleDrawing} />
                            <Tool title="polyligne" icon={icons.dessin.polyligne} action={polylineDrawing} />
                            <Tool title="polygone" icon={icons.dessin.polygone} action={polygonDrawing} />
                        </Tool>
                        <Tool title="guide" icon={icons.guide.guide}>
                            <Tool title="tangente" icon={icons.guide.tangente} action={tangentGuide} />
                            <Tool title="normale" icon={icons.guide.normale} action={normalGuide} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="affichage">
                        <Tool title="état" icon={icons.etat} action={mapState} />
                        <Tool title="vue" icon={viewIcon}>
                            <Tool title="street view" icon={icons.vue.streetView} action={streetView} />
                            <Tool title="bing maps" icon={icons.vue.bingMaps} action={bingMaps} />
                            <Tool title="fond geoserver" icon={icons.vue.fondGeoserveur} action={geoserverBackground} />
                        </Tool>
                        <Tool title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} action={toggleTheme} />
                    </ToolbarTools>
                </Toolbar>
                <MapView />
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
