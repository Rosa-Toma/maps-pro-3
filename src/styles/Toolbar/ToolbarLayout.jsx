import styled from "styled-components";

export const ToolbarLayout = styled.div`
  grid-area: toolbar;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 2px 2px 2px ${({ theme }) => theme.divider};
  margin-bottom: 2px;
`;
