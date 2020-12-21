import styled from "styled-components";

export const HeaderLayout = styled.header`
    grid-area: header;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.divider};
    background: ${({ theme }) => theme.background.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogoImg = styled.img`
    width: 170px;
`;

export const HeaderTabsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 500px;
`;
