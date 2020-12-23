import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.text.primary};
    text-align: center;
    font-size: 0.8em;
    letter-spacing: 1px;
    text-transform: capitalize;
`;

export const Items = styled.div`
    display: ${({ hide }) => (hide ? "none" : "flex")};
    flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
    justify-content: space-evenly;
    align-items: center;
`;
