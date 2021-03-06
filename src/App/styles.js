import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
    font-family: verdana;
  }`;

export const Layout = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "main";

    grid-template-rows: 50px calc(100vh - 50px);
`;


export const HomePageLayout = styled.div`
    grid-area: main;
    display: ${({ active }) => (active ? "grid" : "none")};
    grid-template-areas:
        "sidebar toolbar"
        "sidebar mapView";

    grid-template-columns: 400px 1fr;
    grid-template-rows: 100px calc(100vh - 150px);
`;

export const SearchPagelayout = styled.div`
    grid-area: main;

    display: ${({ active }) => (active ? "grid" : "none")};
`;

export const InformationPageLayout = styled.div`
    grid-area: main;

    display: ${({ active }) => (active ? "grid" : "none")};
`;

export const AccountPageLayout = styled.div`
    grid-area: main;

    display: ${({ active }) => (active ? "grid" : "none")};
`;
