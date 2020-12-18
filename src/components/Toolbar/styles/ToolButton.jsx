import styled from "styled-components";

export const ToolButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.divider};
  box-shadow: 1px 1px 1px ${({ theme }) => theme.divider};
  background-color: ${({ theme }) => theme.background.secondary};
  width: 80px;
  padding: 5px;
  outline: none;
  background-position: center;
  &:hover {
    background-color: ${({ theme }) => theme.action.hover};
  }
`;
