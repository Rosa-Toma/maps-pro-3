import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ sidebar }) => (sidebar ? "100%" : "auto")};
    padding: ${({ sidebar }) => (sidebar ? "5px" : "0")};
    user-select: none;
`;

export const Items = styled.div`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: ${({ sidebar }) => (sidebar ? "auto" : "absolute")};
    top: ${({ sidebar }) => (sidebar ? "auto" : "85px")};
    background-color: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.divider};
    width: ${({ sidebar }) => (sidebar ? "100%" : "auto")};
`;
