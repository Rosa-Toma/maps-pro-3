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
import { MapContextProvider } from "context/MapContext";

function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppLayout>
                <MapContextProvider>
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
                                <Tool title="sélection" icon={icons.selection.pointEtRectangle} />
                                <Tool title="sélection" icon={icons.selection.cercle} />
                                <Tool title="sélection" icon={icons.selection.polygonale} />
                                <Tool title="sélection" icon={icons.selection.libre} />
                            </Tool>
                            <Tool title="annuler" icon={icons.annuler} />
                            <Tool title="refaire" icon={icons.refaire} />
                        </ToolbarTools>
                        <ToolbarTools title="navigation">
                            <Tool title="panoter" icon={icons.panoter} />
                            <Tool title="zoomer" icon={icons.zoomer} />
                            <Tool title="dézoomer" icon={icons.dezoomer} />
                            <Tool title="recentrer" icon={icons.recentrer} />
                        </ToolbarTools>
                        <ToolbarTools title="outils">
                            <Tool title="mesure" icon={icons.mesure.distance} isDropdown>
                                <Tool title="sélection" icon={icons.mesure.distance} />
                                <Tool title="sélection" icon={icons.mesure.surface} />
                                <Tool title="sélection" icon={icons.mesure.buffer} />
                                <Tool title="sélection" icon={icons.mesure.translater} />
                                <Tool title="sélection" icon={icons.mesure.modifier} />
                            </Tool>
                        </ToolbarTools>
                        <ToolbarTools title="accroche">
                            <Tool title="inactive" icon={icons.inactive.inactive} isDropdown>
                                <Tool title="sélection" icon={icons.inactive.inactive} />
                                <Tool title="sélection" icon={icons.inactive.point} />
                                <Tool title="sélection" icon={icons.inactive.segment} />
                                <Tool title="sélection" icon={icons.inactive.polyligne} />
                            </Tool>
                        </ToolbarTools>
                        <ToolbarTools title="dessin">
                            <Tool title="dessin" icon={icons.dessin.cercle} isDropdown>
                                <Tool title="sélection" icon={icons.dessin.cercle} />
                                <Tool title="sélection" icon={icons.dessin.polyligne} />
                                <Tool title="sélection" icon={icons.dessin.polygone} />
                            </Tool>
                            <Tool title="guide" icon={icons.guide.guide} isDropdown>
                                <Tool title="sélection" icon={icons.guide.tangente} />
                                <Tool title="sélection" icon={icons.guide.normale} />
                            </Tool>
                        </ToolbarTools>
                        <ToolbarTools title="affichage">
                            <Tool title="état" icon={icons.etat} />
                            <Tool title="vue" icon={icons.vue.streetView} isDropdown>
                                <Tool title="sélection" icon={icons.vue.streetView} />
                                <Tool title="sélection" icon={icons.vue.bingMaps} />
                                <Tool title="sélection" icon={icons.vue.fondGeoserveur} />
                            </Tool>
                            <Tool onClick={toggleTheme} title="theme" icon={theme === "light" ? icons.theme.moon : icons.theme.sun} />
                        </ToolbarTools>
                    </Toolbar>
                    <MapView />
                </MapContextProvider>
            </AppLayout>
        </ThemeProvider>
    );
}

export default App;
