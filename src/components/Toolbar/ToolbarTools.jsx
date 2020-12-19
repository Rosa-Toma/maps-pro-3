import { ToolbarToolsContainer } from "styles/Toolbar/ToolbarToolsContainer";
import { ToolbarToolsTitle } from "styles/Toolbar/ToolbarToolsTitle";

export default function ToolbarTools({ children, title }) {
  return (
    <div>
      <ToolbarToolsTitle>{title}</ToolbarToolsTitle>
      <ToolbarToolsContainer>{children}</ToolbarToolsContainer>
    </div>
  );
}
