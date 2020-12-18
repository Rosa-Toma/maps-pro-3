import { ToolButton } from "styles/Toolbar/ToolButton";
import { ToolIcon } from "styles/Toolbar/ToolIcon";
import { ToolTitle } from "styles/Toolbar/ToolTitle";

export default function Tool({ title, icon, idDropdown, onClick }) {
  return (
    <div>
      <ToolButton onClick={onClick}>
        <ToolIcon>
          {icon} {idDropdown && <h1>icon</h1>}
        </ToolIcon>
        <ToolTitle>{title}</ToolTitle>
      </ToolButton>
    </div>
  );
}
