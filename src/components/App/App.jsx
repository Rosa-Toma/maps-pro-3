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
import { useStandard, useNavigation, useMeasure, useSnap, useTheme } from "hooks";

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
    const [inactive, point, segment, polyline] = useSnap(setSnapIcon);
    const [theme, toggleTheme] = useTheme();

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
                        <Tool title="sélection" icon={selectionIcon} isDropdown>
                            <Tool handleClick={pointSelection} title="point et rectangle" icon={icons.selection.pointEtRectangle} />
                            <Tool handleClick={circleSelection} title="cercle" icon={icons.selection.cercle} />
                            <Tool handleClick={polygonSelection} title="polygonale" icon={icons.selection.polygonale} />
                            <Tool handleClick={freeSelection} title="libre" icon={icons.selection.libre} />
                        </Tool>
                        <Tool handleClick={undo} title="annuler" icon={icons.annuler} />
                        <Tool handleClick={redo} title="refaire" icon={icons.refaire} />
                    </ToolbarTools>
                    <ToolbarTools title="navigation">
                        <Tool handleClick={panoter} title="panoter" icon={icons.panoter} />
                        <Tool handleClick={zoomIn} title="zoomer" icon={icons.zoomer} />
                        <Tool handleClick={zoomOut} title="dézoomer" icon={icons.dezoomer} />
                        <Tool handleClick={recenter} title="recentrer" icon={icons.recentrer} />
                    </ToolbarTools>
                    <ToolbarTools title="outils">
                        <Tool title="mesure" icon={measureIcon} isDropdown>
                            <Tool handleClick={distanceMeasurement} title="distance" icon={icons.mesure.distance} />
                            <Tool handleClick={surfaceMeasurement} title="surface" icon={icons.mesure.surface} />
                            <Tool handleClick={bufferMeasurement} title="buffer" icon={icons.mesure.buffer} />
                            <Tool handleClick={translater} title="translater" icon={icons.mesure.translater} />
                            <Tool handleClick={edit} title="modifier" icon={icons.mesure.modifier} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="accroche">
                        <Tool title="inactive" icon={snapIcon} isDropdown>
                            <Tool handleClick={inactive} title="inactive" icon={icons.inactive.inactive} />
                            <Tool handleClick={point} title="point" icon={icons.inactive.point} />
                            <Tool handleClick={segment} title="segment" icon={icons.inactive.segment} />
                            <Tool handleClick={polyline} title="polyligne" icon={icons.inactive.polyligne} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="dessin">
                        <Tool title="dessin" icon={drawingIcon} isDropdown>
                            <Tool title="cercle" icon={icons.dessin.cercle} />
                            <Tool title="polyligne" icon={icons.dessin.polyligne} />
                            <Tool title="polygone" icon={icons.dessin.polygone} />
                        </Tool>
                        <Tool title="guide" icon={icons.guide.guide} isDropdown>
                            <Tool title="tangente" icon={icons.guide.tangente} />
                            <Tool title="normale" icon={icons.guide.normale} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="affichage">
                        <Tool title="état" icon={icons.etat} />
                        <Tool title="vue" icon={viewIcon} isDropdown>
                            <Tool title="street view" icon={icons.vue.streetView} />
                            <Tool title="bing maps" icon={icons.vue.bingMaps} />
                            <Tool title="fond geoserver" icon={icons.vue.fondGeoserveur} />
                        </Tool>
                        <Tool handleClick={toggleTheme} title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} />
                    </ToolbarTools>
                </Toolbar>
                <MapView />
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
