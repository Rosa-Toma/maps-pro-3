import { ToolButton } from "styles/Shared/ToolButton";
import { ToolIcon } from "styles/Shared/ToolIcon";
import { ToolTitle } from "styles/Shared/ToolTitle";
import { ToolsDropdown } from "styles/Toolbar/ToolsDropdown";

import { VscChevronDown } from "react-icons/vsc";

import { useState } from "react";

export default function Tool({ children, title, icon, isDropdown, handleClick }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <ToolButton onClick={handleClick}>
                <ToolIcon>
                    {icon} {isDropdown && <VscChevronDown size="1.5em" onClick={() => setIsOpen(!isOpen)} />}
                </ToolIcon>

                <ToolTitle>{title}</ToolTitle>
            </ToolButton>
            {isOpen && <ToolsDropdown>{children}</ToolsDropdown>}
        </div>
    );
}
