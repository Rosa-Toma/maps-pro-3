import styled from "styled-components";

export const TabButton = styled.button`
  border: solid;
  cursor: pointer;
  padding: 5px;
  width: 80px;
  background: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  border: solid 1px ${({ theme }) => theme.divider};

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;
