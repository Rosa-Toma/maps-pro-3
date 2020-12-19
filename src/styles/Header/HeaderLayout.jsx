import styled from "styled-components";

export const HeaderLayout = styled.header`
  grid-area: header;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.divider};
  background: ${({ theme }) => theme.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
