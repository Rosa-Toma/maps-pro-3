import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./styles/useTheme";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import logoLight from "./assets/logoLight.webp";
import logoDark from "./assets/logoDark.webp";

function App() {
  const [theme, toggleTheme] = useTheme();
  const Layout = styled.div`
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar toolbar"
      "sidebar mapView";

    grid-template-columns: 300px calc(100vw - 300px);
    grid-template-rows: 50px 100px calc(100vh - 150px);
  `;
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Header>
          <button onClick={toggleTheme}>tooggggllle</button>
          <Logo />
          <HeaderTabSection>
            <Tab />
            <Tab />
            <Tab />
            <Tab />
          </HeaderTabSection>
        </Header>
        <Sidebar>
          <SidebarTabSection>
            <Tab />
            <Tab />
            <Tab />
          </SidebarTabSection>
        </Sidebar>
        <Toolbar>
          <ToolSection>
            <Tool title="sélection" />
            <Tool />
            <Tool />
          </ToolSection>
          <ToolSection></ToolSection>
          <ToolSection></ToolSection>
          <ToolSection></ToolSection>
          <ToolSection></ToolSection>
          <ToolSection></ToolSection>
        </Toolbar>
        <MapView />
      </Layout>
    </ThemeProvider>
  );
}

function Header({ children }) {
  const Layout = styled.header`
    grid-area: header;
    border: solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return <Layout>{children}</Layout>;
}

function Logo() {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.background.primary;

  const Img = styled.img`
    width: 170px;
  `;

  return (
    <div>
      <Img
        src={backgroundColor === "#FAFAFA" ? logoDark : logoLight}
        alt="logo"
      />
    </div>
  );
}

function HeaderTabSection({ children }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 500px;
  `;
  return <Container>{children}</Container>;
}

function Tab() {
  const TabButton = styled.button`
    border: solid;
    cursor: pointer;
    padding: 5px;
    width: 80px;
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
    border: solid 1px ${({ theme }) => theme.divider};

    &:hover {
      color: ${({ theme }) => theme.text.primary};
    }
  `;
  return (
    <div>
      <TabButton>Tab</TabButton>
    </div>
  );
}

function Sidebar({ children }) {
  const Layout = styled.div`
    grid-area: sidebar;
    border: solid;
  `;
  return <Layout>{children}</Layout>;
}

function SidebarTabSection({ children }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    width: 100%;
  `;
  return <Container>{children}</Container>;
}

function Toolbar({ children }) {
  const Layout = styled.div`
    grid-area: toolbar;
    border: solid;
  `;
  return <Layout>{children}</Layout>;
}

function ToolSection({ children }) {
  return <div>{children}</div>;
}

function Tool({ title, icon, idDropdown }) {
  const ToolButton = styled.button`
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: solid 1px ${({ theme }) => theme.divider};
    border-radius: 5px;

    box-shadow: var(--shadow-1);

    background-color: ${({ theme }) => theme.background.secondary};

    width: 70px;
    padding: 5px;
    outline: none;

    background-position: center;
    transition: background 0.5s;
  `;

  const ToolIcon = styled.div`
    color: ${({ theme }) => theme.text.primary};
  `;

  const ToolTitle = styled.h2`
    color: ${({ theme }) => theme.text.primary};
    font-size: 0.8em;
    letter-spacing: 1px;
    text-align: center;
    text-transform: capitalize;
  `;

  return (
    <div>
      <ToolButton>
        <ToolIcon>
          {icon} {idDropdown && <h1>icon</h1>}
        </ToolIcon>
        <ToolTitle>{title}</ToolTitle>
      </ToolButton>
    </div>
  );
}

function MapView() {
  const Layout = styled.div`
    grid-area: mapView;
    border: solid;
  `;
  return (
    <Layout>
      <h1>mapview</h1>
    </Layout>
  );
}

export default App;
