import styled from "styled-components";

export const SidebarLayout = styled.div`
  grid-area: sidebar;
  z-index: 2;
  box-shadow: 3px 3px 3px ${({ theme }) => theme.divider};
`;

export const SidebarTabsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 100%;
`;
