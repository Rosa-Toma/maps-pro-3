import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar toolbar"
        "sidebar mapView";

    grid-template-columns: 400px 1fr;
    grid-template-rows: 50px 100px calc(100vh - 150px);
`;