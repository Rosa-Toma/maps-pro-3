import styled from "styled-components";

export const ToolbarLayout = styled.div`
    grid-area: toolbar;
    position: relative;
    resize: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.divider};
`;

export const ToolbarToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ToolbarToolsTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  text-align: center;

  font-size: .8em;

  letter-spacing: 1px;

  text-transform: capitalize;
`;
