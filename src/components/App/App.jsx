import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";
import { lightTheme, darkTheme } from "styles/theme";
import { Layout } from "./styles";
import { icons } from "assets/icons/icons";
import { Logo, Header, Map, Button, Section, Sidebar, Toolbar } from "components";
import { useStandard, useNavigation, useMeasure, useSnap, useDrawing, useGuide, useDisplay, useDisplaySection } from "hooks";
import { MapContext } from "context/MapContext";

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
    const [hideLegend, displayLegend, hideSelection, displaySelection, hideTools, displayTools, hideLocalisation, displayLocalisation] = useDisplaySection();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Layout>
                <Header>
                    <Logo />
                    <Section width="500px">
                        <Button title="Carte" width="100px" height="32px" />
                        <Button title="Recherche" width="100px" height="32px" />
                        <Button title="information" width="100px" height="32px" />
                        <Button title="compte" width="100px" height="32px" />
                    </Section>
                </Header>
                <Sidebar>
                    <Section>
                        <Button title="légende" onClick={displayLegend} width="90px" height="32px" />
                        <Button title="sélection" onClick={displaySelection} width="90px" height="32px" />
                        <Button title="outils" onClick={displayTools} width="90px" height="32px" />
                        <Button title="localisation" onClick={displayLocalisation} width="90px" height="32px" />
                    </Section>
                    <Section hide={hideLegend}></Section>
                    <Section hide={hideSelection}></Section>
                    <Section hide={hideTools} vertical>
                        <Button title="création objets" width="390px" horizontal bold></Button>
                        <Button title="impression" width="390px" horizontal bold>
                            <Section width="390px">
                                <Button title="paramètres" icon={icons.impression.parametres} onClick={pointSelection} />
                                <Button title="recadrer" icon={icons.impression.recadrer} onClick={circleSelection} />
                                <Button title="imprimer" icon={icons.impression.imprimer} onClick={polygonSelection} />
                                <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                            </Section>
                        </Button>
                    </Section>
                    <Section hide={hideLocalisation}></Section>
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
