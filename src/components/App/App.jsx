import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "themes";
import { Layout, HomePageLayout, SearchPagelayout, InformationPageLayout, AccountPageLayout, GlobalStyles } from "./styles";
import { icons } from "assets/icons/icons";
import { Logo, Header, Button, Section } from "components";
import { Home } from "pages";
import { useDisplayPage, useTheme } from "hooks";

const App = () => {
    const [theme, toggleTheme] = useTheme();
    const [activeHome, displayHome, activeSearch, displaySearch, activeInformation, displayInformation, activeAcount, displayAcount] = useDisplayPage();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Layout>
                <Header>
                    <Logo />
                    <Section width="500px">
                        <Button title="Carte" width="100px" height="32px" onClick={displayHome} />
                        <Button title="Recherche" width="100px" height="32px" onClick={displaySearch} />
                        <Button title="information" width="100px" height="32px" onClick={displayInformation} />
                        <Button title="compte" width="100px" height="32px" onClick={displayAcount} />
                        <Button icon={theme === "light" ? icons.theme.moon : icons.theme.sun} width="50px" height="32px" onClick={toggleTheme} />
                    </Section>
                </Header>
                <HomePageLayout active={activeHome}>
                    <Home />
                </HomePageLayout>
                <SearchPagelayout active={activeSearch}>
                    <div>
                        <h1>Recherche</h1>
                    </div>
                </SearchPagelayout>
                <InformationPageLayout active={activeInformation}>
                    <div>
                        <h1>Information</h1>
                    </div>
                </InformationPageLayout>
                <AccountPageLayout active={activeAcount}>
                    <div>
                        <h1>Compte</h1>
                    </div>
                </AccountPageLayout>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
