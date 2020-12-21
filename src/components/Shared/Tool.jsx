import { ToolButton, ToolIcon, ToolTitle, ToolsDropdown } from "./styles";

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
