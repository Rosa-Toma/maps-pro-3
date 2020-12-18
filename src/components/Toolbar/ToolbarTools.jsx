import { ToolbarToolsContainer } from "styles/Toolbar/ToolbarToolsContainer";
import { ToolbarToolsTitle } from "styles/Toolbar/ToolbarToolsTitle";

export default function ToolbarTools({ children, title }) {
  return (
    <ToolbarToolsContainer>
      {children}
      <ToolbarToolsTitle>{title}</ToolbarToolsTitle>
    </ToolbarToolsContainer>
  );
}
