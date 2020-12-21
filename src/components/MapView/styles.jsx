import styled from "styled-components";

export const MapViewLayout = styled.div`
    grid-area: mapView;
    z-index: 1;
    filter: ${({ theme }) => theme.map.filter};
`;
