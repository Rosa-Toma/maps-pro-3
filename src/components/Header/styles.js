import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 50px;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.divider};
    background: ${({ theme }) => theme.background.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
