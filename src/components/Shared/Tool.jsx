import { ToolButton } from "styles/Shared/ToolButton";
import { ToolIcon } from "styles/Shared/ToolIcon";
import { ToolTitle } from "styles/Shared/ToolTitle";
import { ToolsDropdown } from "styles/Toolbar/ToolsDropdown";
import { icons } from "assets/icons/icons";

import { useState } from "react";

export default function Tool({ children, title, icon, action }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        action && action();
    };

    return (
        <div onClick={handleClick}>
            <ToolButton>
                <ToolIcon>
                    {icon} {children && icons.dropdown}
                </ToolIcon>

                <ToolTitle>{title}</ToolTitle>
            </ToolButton>
            {isOpen && <ToolsDropdown>{children}</ToolsDropdown>}
        </div>
    );
}
