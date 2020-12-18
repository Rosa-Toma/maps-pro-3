import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./styles/useTheme";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styles from "./App.module.css";
import logoLight from "./assets/logoLight.webp";
import logoDark from "./assets/logoDark.webp";

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={styles.app}>
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
      </div>
    </ThemeProvider>
  );
}

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

function Logo() {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.background.primary;

  return (
    <div className={styles.logo}>
      <img
        src={backgroundColor === "#FAFAFA" ? logoDark : logoLight}
        alt="logo"
      />
    </div>
  );
}

function HeaderTabSection({ children }) {
  return <div className={styles.headerTabSection}>{children}</div>;
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
  return <div className={styles.sidebar}>{children}</div>;
}

function SidebarTabSection({ children }) {
  return <div className={styles.sidebarTabSection}>{children}</div>;
}

function Toolbar({ children }) {
  return <div className={styles.toolbar}>{children}</div>;
}

function ToolSection({ children }) {
  return <div className={styles.toolSection}>{children}</div>;
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
  return (
    <div className={styles.mapView}>
      <h1>mapview</h1>
    </div>
  );
}

export default App;
