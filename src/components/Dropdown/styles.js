import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: ${({ sidebar }) => (sidebar ? "column" : "row")};

    align-items: center;
    user-select: none; /* standard syntax */

    &:hover {
        background-color: ${({ theme }) => theme.action.hover};
        background-position: center;
        transition: background 0.2s;
    }
`;

export const Childs = styled.div`
    margin-top: 0;
    width: ${({ sidebar }) => (sidebar ? "390px" : "auto")};
    background-color: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.divider};
    z-index: 1;
    position: ${({ sidebar }) => (sidebar ? "auto" : "absolute")};
    top: ${({ sidebar }) => (sidebar ? "auto" : "85px")};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.text.primary};
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.text.primary};
    font-size: 0.8em;
    letter-spacing: 1px;
    text-align: center;
    text-transform: capitalize;
    font-weight: lighter;
    font-size: 11px;
`;
