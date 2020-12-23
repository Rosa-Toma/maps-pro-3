import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "themes";
import { Grid, HomeGrid, SearchGrid, InformationGrid, AcountGrid, GlobalStyles } from "./styles";
import { icons } from "assets/icons/icons";
import { Logo, Header, Map, Button, Section, Sidebar, Toolbar, Dropdown } from "components";
import { useStandard, useNavigation, useMeasure, useSnap, useDrawing, useGuide, useDisplay, useDisplaySection, useDisplayPage } from "hooks";
import { MapContext } from "context/MapContext";

const App = () => {
    const MAP = useContext(MapContext);

    const [pointSelection, circleSelection, polygonSelection, freeSelection, undo, redo] = useStandard();
    const [panoter, zoomIn, zoomOut, recenter] = useNavigation(MAP);
    const [distanceMeasurement, surfaceMeasurement, bufferMeasurement, translater, edit] = useMeasure();
    const [inactiveSnap, pointSnap, segmentSnap, polylineSnap] = useSnap();
    const [circleDrawing, polylineDrawing, polygonDrawing] = useDrawing();
    const [tangentGuide, normalGuide] = useGuide();
    const [mapState, streetView, bingMaps, geoserverBackground, theme, toggleTheme] = useDisplay();
    const [hideLegend, displayLegend, hideSelection, displaySelection, hideTools, displayTools, hideLocalisation, displayLocalisation] = useDisplaySection();
    const [activeHome, displayHome, activeSearch, displaySearch, activeInformation, displayInformation, activeAcount, displayAcount] = useDisplayPage();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Grid>
                <Header>
                    <Logo />
                    <Section width="500px">
                        <Button title="Carte" width="100px" height="32px" onClick={displayHome} />
                        <Button title="Recherche" width="100px" height="32px" onClick={displaySearch} />
                        <Button title="information" width="100px" height="32px" onClick={displayInformation} />
                        <Button title="compte" width="100px" height="32px" onClick={displayAcount} />
                    </Section>
                </Header>

                <HomeGrid active={activeHome}>
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
                            <Dropdown title="création objets" sidebar>
                                <Section>
                                    <form action="">
                                        <input type="file" name="" id="" />
                                    </form>
                                </Section>
                                <Section>
                                    <Button title="paramètres" icon={icons.impression.parametres} onClick={pointSelection} />
                                    <Button title="recadrer" icon={icons.impression.recadrer} onClick={circleSelection} />
                                    <Button title="imprimer" icon={icons.impression.imprimer} onClick={polygonSelection} />
                                    <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                                </Section>
                            </Dropdown>

                            <Dropdown title="impression" sidebar>
                                <Section></Section>
                                <Section style={{ display: "flex", flexWrap: "wrap" }}>
                                    <Button title="paramètres" icon={icons.impression.parametres} onClick={pointSelection} />
                                    <Button title="recadrer" icon={icons.impression.recadrer} onClick={circleSelection} />
                                    <Button title="imprimer" icon={icons.impression.imprimer} onClick={polygonSelection} />
                                    <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                                    <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                                    <Button title="exporter" icon={icons.impression.exporter} onClick={freeSelection} />
                                </Section>
                            </Dropdown>
                        </Section>
                        <Section hide={hideLocalisation}></Section>
                    </Sidebar>
                    <Toolbar>
                        <Section title="standard">
                            <Dropdown title="sélection" baseIcon={icons.selection.pointEtRectangle}>
                                <Button title="point et rectangle" icon={icons.selection.pointEtRectangle} onClick={pointSelection} />
                                <Button title="cercle" icon={icons.selection.cercle} onClick={circleSelection} />
                                <Button title="polygonale" icon={icons.selection.polygonale} onClick={polygonSelection} />
                                <Button title="libre" icon={icons.selection.libre} onClick={freeSelection} />
                            </Dropdown>

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
                            <Dropdown title="mesure" baseIcon={icons.mesure.distance}>
                                <Button title="distance" icon={icons.mesure.distance} onClick={distanceMeasurement} />
                                <Button title="surface" icon={icons.mesure.surface} onClick={surfaceMeasurement} />
                                <Button title="buffer" icon={icons.mesure.buffer} onClick={bufferMeasurement} />
                                <Button title="translater" icon={icons.mesure.translater} onClick={translater} />
                                <Button title="modifier" icon={icons.mesure.modifier} onClick={edit} />
                            </Dropdown>
                        </Section>
                        <Section title="accroche">
                            <Dropdown title="accroche" baseIcon={icons.inactive.inactive}>
                                <Button title="inactive" icon={icons.inactive.inactive} onClick={inactiveSnap} />
                                <Button title="point" icon={icons.inactive.point} onClick={pointSnap} />
                                <Button title="segment" icon={icons.inactive.segment} onClick={segmentSnap} />
                                <Button title="polyligne" icon={icons.inactive.polyligne} onClick={polylineSnap} />
                            </Dropdown>
                        </Section>
                        <Section title="dessin">
                            <Dropdown title="dessin" baseIcon={icons.dessin.base}>
                                <Button title="cercle" icon={icons.dessin.cercle} onClick={circleDrawing} />
                                <Button title="polyligne" icon={icons.dessin.polyligne} onClick={polylineDrawing} />
                                <Button title="polygone" icon={icons.dessin.polygone} onClick={polygonDrawing} />
                            </Dropdown>
                            <Dropdown title="guide" baseIcon={icons.guide.guide}>
                                <Button title="tangente" icon={icons.guide.tangente} onClick={tangentGuide} />
                                <Button title="normale" icon={icons.guide.normale} onClick={normalGuide} />
                            </Dropdown>
                        </Section>
                        <Section title="affichage">
                            <Button title="état" icon={icons.etat} onClick={mapState} />
                            <Dropdown title="vue" baseIcon={icons.vue.streetView}>
                                <Button title="street view" icon={icons.vue.streetView} onClick={streetView} />
                                <Button title="bing maps" icon={icons.vue.bingMaps} onClick={bingMaps} />
                                <Button title="fond geoserver" icon={icons.vue.fondGeoserveur} onClick={geoserverBackground} />
                            </Dropdown>
                            <Button title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} onClick={toggleTheme} />
                        </Section>
                    </Toolbar>
                    <Map />
                </HomeGrid>
                <SearchGrid active={activeSearch}>
                    <div>
                        <h1>Recherche</h1>
                    </div>
                </SearchGrid>
                <InformationGrid active={activeInformation}>
                    <div>
                        <h1>Information</h1>
                    </div>
                </InformationGrid>
                <AcountGrid active={activeAcount}>
                    <div>
                        <h1>Compte</h1>
                    </div>
                </AcountGrid>
            </Grid>
        </ThemeProvider>
    );
};

export default App;
