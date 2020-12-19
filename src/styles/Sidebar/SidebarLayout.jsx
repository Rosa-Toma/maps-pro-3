import styled from "styled-components";

export const SidebarLayout = styled.div`
  grid-area: sidebar;
  z-index: 2;
  box-shadow: 3px 3px 3px ${({ theme }) => theme.divider};
`;
