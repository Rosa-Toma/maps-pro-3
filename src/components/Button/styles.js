import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: ${({ sidebar }) => (sidebar ? "row-reverse" : "column")};
    justify-content: ${({ sidebar }) => (sidebar ? "space-between" : "center")};
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.text.primary};
    border: solid 1px ${({ theme }) => theme.divider};
    box-shadow: 1px 1px 1px ${({ theme }) => theme.divider};
    background-color: ${({ theme }) => theme.background.secondary};
    width: ${({ width }) => (width ? width : "80px")};
    height: ${({ height }) => (height ? height : "50px")};
    padding: 5px;
    outline: none;
    margin: 5px;
    user-select: none;

    &:hover {
        background-color: ${({ theme }) => theme.action.hover};
        transition: background 0.2s;
    }
`;

export const Title = styled.h2`
    font-size: 0.8em;
    letter-spacing: 1px;
    font-weight: lighter;
    font-size: 11px;
    text-transform: capitalize;
`;
