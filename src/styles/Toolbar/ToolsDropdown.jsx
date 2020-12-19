import styled from "styled-components";

export const ToolsDropdown = styled.div`
  margin-top: 13px;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.divider};
  z-index: 1;
  position: absolute;
  overflow: hidden;
`;
