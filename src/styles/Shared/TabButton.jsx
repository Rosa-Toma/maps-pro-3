import styled from "styled-components";

export const TabButton = styled.button`
  border: solid;
  cursor: pointer;
  padding: 5px;
  width: 80px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.divider};
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  border: solid 1px ${({ theme }) => theme.divider};

  &:hover {
    background-color: ${({ theme }) => theme.action.hover};
    background-position: center;
    transition: background 0.2s;
  }
`;
