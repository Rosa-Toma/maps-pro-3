import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";
import { GlobalStyles } from "styles/global";
import { AppLayout } from "styles/App/AppLayout";
import { icons } from "assets/icons/icons";
import { Tab } from "components/Shared";
import { Header, HeaderLogo, HeaderTabs } from "components/Header";
import { Sidebar, SidebarTabs } from "components/Sidebar";
import { Toolbar, ToolbarTools, Tool } from "components/Toolbar";
import { MapView } from "components/MapView";
import { MapContext } from "context/MapContext";
import { useStandard, useNavigation, useMeasure, useSnap, useDrawing, useGuide, useDisplay } from "hooks";

function App() {
    const MAP = useContext(MapContext);

    const [selectionIcon, setSelectionIcon] = useState(icons.selection.pointEtRectangle);
    const [measureIcon, setMeasureIcon] = useState(icons.mesure.distance);
    const [snapIcon, setSnapIcon] = useState(icons.inactive.inactive);
    const [drawingIcon, setDrawingIcon] = useState(icons.dessin.cercle);
    const [viewIcon, setViewIcon] = useState(icons.vue.streetView);

    const [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo] = useStandard(setSelectionIcon);
    const [panoter, zoomIn, zoomOut, recenter] = useNavigation(MAP);
    const [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit] = useMeasure(setMeasureIcon);
    const [inactiveSnap, pointSnap, segmentSnap, polylineSnap] = useSnap(setSnapIcon);
    const [circleDrawing, polylineDrawing, polygonDrawing] = useDrawing(setDrawingIcon);
    const [tangentGuide, normalGuide] = useGuide();
    const [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme] = useDisplay(setViewIcon);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppLayout>
                <Header>
                    <HeaderLogo />
                    <HeaderTabs>
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                    </HeaderTabs>
                </Header>
                <Sidebar>
                    <SidebarTabs>
                        <Tab />
                        <Tab />
                        <Tab />
                    </SidebarTabs>
                </Sidebar>
                <Toolbar>
                    <ToolbarTools title="standard">
                        <Tool title="sélection" icon={selectionIcon}>
                            <Tool action={pointSelection} title="point et rectangle" icon={icons.selection.pointEtRectangle} />
                            <Tool action={circleSelection} title="cercle" icon={icons.selection.cercle} />
                            <Tool action={polygonSelection} title="polygonale" icon={icons.selection.polygonale} />
                            <Tool action={freeSelection} title="libre" icon={icons.selection.libre} />
                        </Tool>
                        <Tool action={undo} title="annuler" icon={icons.annuler} />
                        <Tool action={redo} title="refaire" icon={icons.refaire} />
                    </ToolbarTools>
                    <ToolbarTools title="navigation">
                        <Tool action={panoter} title="panoter" icon={icons.panoter} />
                        <Tool action={zoomIn} title="zoomer" icon={icons.zoomer} />
                        <Tool action={zoomOut} title="dézoomer" icon={icons.dezoomer} />
                        <Tool action={recenter} title="recentrer" icon={icons.recentrer} />
                    </ToolbarTools>
                    <ToolbarTools title="outils">
                        <Tool title="mesure" icon={measureIcon}>
                            <Tool action={distanceMeasurement} title="distance" icon={icons.mesure.distance} />
                            <Tool action={surfaceMeasurement} title="surface" icon={icons.mesure.surface} />
                            <Tool action={bufferMeasurement} title="buffer" icon={icons.mesure.buffer} />
                            <Tool action={translater} title="translater" icon={icons.mesure.translater} />
                            <Tool action={edit} title="modifier" icon={icons.mesure.modifier} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="accroche">
                        <Tool title="accroche" icon={snapIcon}>
                            <Tool action={inactiveSnap} title="inactive" icon={icons.inactive.inactive} />
                            <Tool action={pointSnap} title="point" icon={icons.inactive.point} />
                            <Tool action={segmentSnap} title="segment" icon={icons.inactive.segment} />
                            <Tool action={polylineSnap} title="polyligne" icon={icons.inactive.polyligne} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="dessin">
                        <Tool title="dessin" icon={drawingIcon}>
                            <Tool action={circleDrawing} title="cercle" icon={icons.dessin.cercle} />
                            <Tool action={polylineDrawing} title="polyligne" icon={icons.dessin.polyligne} />
                            <Tool action={polygonDrawing} title="polygone" icon={icons.dessin.polygone} />
                        </Tool>
                        <Tool title="guide" icon={icons.guide.guide}>
                            <Tool action={tangentGuide} title="tangente" icon={icons.guide.tangente} />
                            <Tool action={normalGuide} title="normale" icon={icons.guide.normale} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="affichage">
                        <Tool action={mapState} title="état" icon={icons.etat} />
                        <Tool title="vue" icon={viewIcon}>
                            <Tool action={streetView} title="street view" icon={icons.vue.streetView} />
                            <Tool action={bingMaps} title="bing maps" icon={icons.vue.bingMaps} />
                            <Tool action={geoserverBackground} title="fond geoserver" icon={icons.vue.fondGeoserveur} />
                        </Tool>
                        <Tool action={toggleTheme} title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} />
                    </ToolbarTools>
                </Toolbar>
                <MapView />
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
