import { ThemeProvider } from "styled-components";
import { Layout, HomePageLayout, SearchPagelayout, InformationPageLayout, AccountPageLayout, GlobalStyles } from "./styles";
import { Logo, Header, Button, Section } from "components";
import { HomePage, SearchPage, InformationPage, AccountPage } from "pages";
import { useDisplayPage, useTheme } from "hooks";

const App = () => {
    const [themeIcon, themeData, toggleTheme] = useTheme();

    const [
        isHomePageActive,
        displayHomePage,
        isSearchPageActive,
        displaySearchPage,
        isInformationPageActive,
        displayInformationPage,
        isAccountPageActive,
        displayAccountPage,
    ] = useDisplayPage();

    return (
        <ThemeProvider theme={themeData}>
            <GlobalStyles />
            <Layout>
                <Header>
                    <Logo />
                    <Section width="500px">
                        <Button title="Carte" width="100px" height="32px" onClick={displayHomePage} />
                        <Button title="Recherche" width="100px" height="32px" onClick={displaySearchPage} />
                        <Button title="information" width="100px" height="32px" onClick={displayInformationPage} />
                        <Button title="compte" width="100px" height="32px" onClick={displayAccountPage} />
                        <Button icon={themeIcon} width="50px" height="32px" onClick={toggleTheme} />
                    </Section>
                </Header>
                <HomePageLayout active={isHomePageActive}>
                    <HomePage />
                </HomePageLayout>
                <SearchPagelayout active={isSearchPageActive}>
                    <SearchPage />
                </SearchPagelayout>
                <InformationPageLayout active={isInformationPageActive}>
                    <InformationPage />
                </InformationPageLayout>
                <AccountPageLayout active={isAccountPageActive}>
                    <AccountPage />
                </AccountPageLayout>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
