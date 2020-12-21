import styled from "styled-components";

export const MapContainer = styled.div`
    grid-area: mapView;
    z-index: 1;
    filter: ${({ theme }) => theme.map.filter};
`;
