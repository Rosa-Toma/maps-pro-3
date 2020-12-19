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
import { useTheme } from "hooks/useTheme";
import { useZoom } from "hooks/useZoom";
import { useContext } from "react";
import { MapContext } from "context/MapContext";

function App() {
    const map = useContext(MapContext);

    const [theme, toggleTheme] = useTheme();
    const [zoomIn, zoomOut] = useZoom(map);

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
                        <Tool title="sélection" icon={icons.selection.pointEtRectangle} isDropdown>
                            <Tool title="point et rectangle" icon={icons.selection.pointEtRectangle} />
                            <Tool title="cercle" icon={icons.selection.cercle} />
                            <Tool title="polygonale" icon={icons.selection.polygonale} />
                            <Tool title="libre" icon={icons.selection.libre} />
                        </Tool>
                        <Tool title="annuler" icon={icons.annuler} />
                        <Tool title="refaire" icon={icons.refaire} />
                    </ToolbarTools>
                    <ToolbarTools title="navigation">
                        <Tool title="panoter" icon={icons.panoter} />
                        <Tool handleClick={zoomIn} title="zoomer" icon={icons.zoomer} />
                        <Tool handleClick={zoomOut} title="dézoomer" icon={icons.dezoomer} />
                        <Tool title="recentrer" icon={icons.recentrer} />
                    </ToolbarTools>
                    <ToolbarTools title="outils">
                        <Tool title="mesure" icon={icons.mesure.distance} isDropdown>
                            <Tool title="distance" icon={icons.mesure.distance} />
                            <Tool title="surface" icon={icons.mesure.surface} />
                            <Tool title="buffer" icon={icons.mesure.buffer} />
                            <Tool title="translater" icon={icons.mesure.translater} />
                            <Tool title="modifier" icon={icons.mesure.modifier} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="accroche">
                        <Tool title="inactive" icon={icons.inactive.inactive} isDropdown>
                            <Tool title="inactive" icon={icons.inactive.inactive} />
                            <Tool title="point" icon={icons.inactive.point} />
                            <Tool title="segment" icon={icons.inactive.segment} />
                            <Tool title="polyligne" icon={icons.inactive.polyligne} />
                        </Tool>
                    </ToolbarTools>
                    <ToolbarTools title="dessin">
                        <Tool title="dessin" icon={icons.dessin.cercle} isDropdown>
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
                        <Tool title="vue" icon={icons.vue.streetView} isDropdown>
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
