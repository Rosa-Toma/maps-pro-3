import { ToolbarToolsContainer } from "./styles/ToolbarToolsContainer";
import { ToolbarToolsTitle } from "./styles/ToolbarToolsTitle";

export default function ToolbarTools({ children, title }) {
  return (
    <ToolbarToolsContainer>
      {children}
      <ToolbarToolsTitle>{title}</ToolbarToolsTitle>
    </ToolbarToolsContainer>
  );
}
