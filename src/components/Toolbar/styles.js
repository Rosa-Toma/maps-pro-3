import styled from "styled-components";

export const StyledToolbar = styled.div`
    grid-area: toolbar;
    position: relative;
    resize: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.divider};
`;
