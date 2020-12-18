import styled from "styled-components";

export const MapViewLayout = styled.div`
  grid-area: mapView;
  margin-left: 3px;
  filter: ${({ theme }) => theme.map.filter};
`;
