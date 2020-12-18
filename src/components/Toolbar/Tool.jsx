import { ToolButton } from "./styles/ToolButton";
import { ToolIcon } from "./styles/ToolIcon";
import { ToolTitle } from "./styles/ToolTitle";

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
