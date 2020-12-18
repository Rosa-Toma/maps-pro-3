import styled from "styled-components";

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar toolbar"
    "sidebar mapView";

  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 50px 100px calc(100vh - 150px);
`;
