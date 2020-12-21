import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? "row-reverse" : "column")};
    justify-content: ${({ horizontal }) => (horizontal ? "space-between" : "center")};
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
    font-size: ${({ bold }) => (bold ? "1.2em" : "auto")};
    margin: 3px 3px 3px 3px;

    &:hover {
        background-color: ${({ theme }) => theme.action.hover};
        background-position: center;
        transition: background 0.2s;
    }
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
`;

export const ChildsContainer = styled.div`
    margin-top: 13px;
    background-color: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.divider};
    z-index: 1;
    position: absolute;
    overflow: hidden;
`;
