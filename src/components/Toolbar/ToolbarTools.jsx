import { ToolbarToolsContainer, ToolbarToolsTitle } from "./styles";

export default function ToolbarTools({ children, title }) {
    return (
        <div>
            <ToolbarToolsTitle>{title}</ToolbarToolsTitle>
            <ToolbarToolsContainer>{children}</ToolbarToolsContainer>
        </div>
    );
}
