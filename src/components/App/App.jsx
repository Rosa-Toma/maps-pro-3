import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";
import { GlobalStyles } from "styles/global";
import { AppLayout } from "styles/App/AppLayout";
import { useTheme } from "hooks/useTheme";
import { MapContextProvider } from "context/MapContext";

import { Tab } from "components/Shared";
import { Header, HeaderLogo, HeaderTabs } from "components/Header";
import { Sidebar, SidebarTabs } from "components/Sidebar";
import { Toolbar, ToolbarTools, Tool } from "components/Toolbar";
import { MapView } from "components/MapView";

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
            <ToolbarTools>
              <Tool title="sélection" />
              <Tool title="annuler" />
              <Tool title="refaire" />
            </ToolbarTools>
            <ToolbarTools>
              <Tool title="panoter" />
              <Tool title="zoomer" />
              <Tool title="dézoomer" />
              <Tool title="recentrer" />
            </ToolbarTools>
            <ToolbarTools>
              <Tool title="mesure" />
            </ToolbarTools>
            <ToolbarTools>
              <Tool title="inactive" />
            </ToolbarTools>
            <ToolbarTools>
              <Tool title="dessin" />
              <Tool title="guide" />
            </ToolbarTools>
            <ToolbarTools>
              <Tool title="état" />
              <Tool title="vue" />
              <Tool onClick={toggleTheme} title="theme" />
            </ToolbarTools>
          </Toolbar>
          <MapView />
        </MapContextProvider>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
