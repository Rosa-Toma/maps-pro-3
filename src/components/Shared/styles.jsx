import styled from "styled-components";

export const TabButton = styled.button`
    border: solid;
    cursor: pointer;
    padding: 7px;
    width: 85px;
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

export const ToolButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text.primary};
    border: solid 1px ${({ theme }) => theme.divider};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.divider};
    background-color: ${({ theme }) => theme.background.secondary};
    width: 80px;
    padding: 5px;
    outline: none;

    margin: 3px 3px 3px 3px;

    &:hover {
        background-color: ${({ theme }) => theme.action.hover};
        background-position: center;
        transition: background 0.2s;
    }
`;

export const ToolIcon = styled.div`
    color: ${({ theme }) => theme.text.primary};
`;

export const ToolTitle = styled.h2`
    color: ${({ theme }) => theme.text.primary};
    font-size: 0.8em;
    letter-spacing: 1px;
    text-align: center;
    text-transform: capitalize;
`;

export const ToolsDropdown = styled.div`
    margin-top: 13px;
    background-color: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.divider};
    z-index: 1;
    position: absolute;
    overflow: hidden;
`;
