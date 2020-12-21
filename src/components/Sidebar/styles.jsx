import styled from "styled-components";

export const SidebarLayout = styled.div`
    grid-area: sidebar;
    z-index: 2;
    box-shadow: 3px 3px 3px ${({ theme }) => theme.divider};
`;

export const TabListLayout = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    width: 100%;
`;

export const TabPanelLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    width: 100%;
`;

export const TabDropdownButton = styled.button`
    border: solid;
    cursor: pointer;
    padding: 12px;
    width: 95%;
    margin-bottom: 5px;
    outline: none;
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

export const TabDropdownTitle = styled.h2`
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.5em;
    letter-spacing: 1px;
    text-align: center;
    text-transform: capitalize;
`;

export const TabDropdownChildren = styled.div`
    display: flex;
    margin-bottom: 15px;
`;
