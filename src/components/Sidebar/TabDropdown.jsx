import { TabDropdownButton, TabDropdownTitle, TabDropdownChildren } from "./styles";

import { useState } from "react";

export default function TabDropdown({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <TabDropdownButton onClick={() => setIsOpen(!isOpen)}>
                <TabDropdownTitle>{title}</TabDropdownTitle>
            </TabDropdownButton>
            <TabDropdownChildren>{isOpen && children}</TabDropdownChildren>
        </>
    );
}
