import styled from "styled-components";

export const HeaderLayout = styled.header`
  grid-area: header;
  box-shadow: 3px 3px 3px ${({ theme }) => theme.divider};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
