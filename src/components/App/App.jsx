import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Logo, Header, Map, Button, Section, Sidebar, Toolbar } from "components";

import { GlobalStyles } from "styles/global";
import { Layout } from "./styles";
import { lightTheme, darkTheme } from "styles/theme";

import { icons } from "assets/icons/icons";

import { MapContext } from "context/MapContext";
import { useStandard, useNavigation, useMeasure, useSnap, useDrawing, useGuide, useDisplay, useDisplayTabPanel } from "hooks";

const App = () => {
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
            <Layout>
                <Header>
                    <Logo />
                    <Section>
                        <Button title="Carte" />
                        <Button title="Recherche" />
                        <Button title="information" />
                        <Button title="compte" />
                    </Section>
                </Header>
                <Sidebar>
                    <Section>
                        <Button title="légende" onClick={displayLegendTabPanel} />
                        <Button title="sélection" onClick={displaySelectionTabPanel} />
                        <Button title="outils" onClick={displayToolsTabPanel} />
                        <Button title="localisation" onClick={displayLocalisationTabPanel} />
                    </Section>
                    {legendTabPanel ? <Section></Section> : null}
                    {selectionTabPanel ? <Section></Section> : null}
                    {toolsTabPanel ? (
                        <Section vertical>
                            <Button large horizontal title="création objets"></Button>
                            <Button large horizontal title="impression">
                                <form style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="title">Titre</label>
                                    <input type="text" name="title" placeholder="Titre" />
                                    <label htmlFor="logo">Logo</label>
                                    <input type="file" name="logo" />
                                </form>
                                <div style={{ display: "flex" }}>
                                    <Button title="paramètres" icon={icons.impression.parametres} onClick={pointSelection} />
                                    <Button title="recadrer" icon={icons.impression.recadrer} onClick={circleSelection} />
                                    <Button title="imprimer" icon={icons.impression.imprimer} onClick={polygonSelection} />
                                    <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                                </div>
                            </Button>
                        </Section>
                    ) : null}
                    {localisationTabPanel ? <Section></Section> : null}
                </Sidebar>
                <Toolbar>
                    <Section title="standard">
                        <Button title="sélection" icon={selectionIcon}>
                            <Button title="point et rectangle" icon={icons.selection.pointEtRectangle} onClick={pointSelection} />
                            <Button title="cercle" icon={icons.selection.cercle} onClick={circleSelection} />
                            <Button title="polygonale" icon={icons.selection.polygonale} onClick={polygonSelection} />
                            <Button title="libre" icon={icons.selection.libre} onClick={freeSelection} />
                        </Button>
                        <Button title="annuler" icon={icons.annuler} onClick={undo} />
                        <Button title="refaire" icon={icons.refaire} onClick={redo} />
                    </Section>
                    <Section title="navigation">
                        <Button title="panoter" icon={icons.panoter} onClick={panoter} />
                        <Button title="zoomer" icon={icons.zoomer} onClick={zoomIn} />
                        <Button title="dézoomer" icon={icons.dezoomer} onClick={zoomOut} />
                        <Button title="recentrer" icon={icons.recentrer} onClick={recenter} />
                    </Section>
                    <Section title="outils">
                        <Button title="mesure" icon={measureIcon}>
                            <Button title="distance" icon={icons.mesure.distance} onClick={distanceMeasurement} />
                            <Button title="surface" icon={icons.mesure.surface} onClick={surfaceMeasurement} />
                            <Button title="buffer" icon={icons.mesure.buffer} onClick={bufferMeasurement} />
                            <Button title="translater" icon={icons.mesure.translater} onClick={translater} />
                            <Button title="modifier" icon={icons.mesure.modifier} onClick={edit} />
                        </Button>
                    </Section>
                    <Section title="accroche">
                        <Button title="accroche" icon={snapIcon}>
                            <Button title="inactive" icon={icons.inactive.inactive} onClick={inactiveSnap} />
                            <Button title="point" icon={icons.inactive.point} onClick={pointSnap} />
                            <Button title="segment" icon={icons.inactive.segment} onClick={segmentSnap} />
                            <Button title="polyligne" icon={icons.inactive.polyligne} onClick={polylineSnap} />
                        </Button>
                    </Section>
                    <Section title="dessin">
                        <Button title="dessin" icon={drawingIcon}>
                            <Button title="cercle" icon={icons.dessin.cercle} onClick={circleDrawing} />
                            <Button title="polyligne" icon={icons.dessin.polyligne} onClick={polylineDrawing} />
                            <Button title="polygone" icon={icons.dessin.polygone} onClick={polygonDrawing} />
                        </Button>
                        <Button title="guide" icon={icons.guide.guide}>
                            <Button title="tangente" icon={icons.guide.tangente} onClick={tangentGuide} />
                            <Button title="normale" icon={icons.guide.normale} onClick={normalGuide} />
                        </Button>
                    </Section>
                    <Section title="affichage">
                        <Button title="état" icon={icons.etat} onClick={mapState} />
                        <Button title="vue" icon={viewIcon}>
                            <Button title="street view" icon={icons.vue.streetView} onClick={streetView} />
                            <Button title="bing maps" icon={icons.vue.bingMaps} onClick={bingMaps} />
                            <Button title="fond geoserver" icon={icons.vue.fondGeoserveur} onClick={geoserverBackground} />
                        </Button>
                        <Button title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} onClick={toggleTheme} />
                    </Section>
                </Toolbar>
                <Map />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
