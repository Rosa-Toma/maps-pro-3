import styled from "styled-components";

export const StyledSection = styled.div`
    display: flex;
    flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
    width: ${({ width }) => (width ? width : "auto")};
    justify-content: space-evenly;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.text.primary};
    text-align: center;

    font-size: 0.8em;

    letter-spacing: 1px;

    text-transform: capitalize;
`;
