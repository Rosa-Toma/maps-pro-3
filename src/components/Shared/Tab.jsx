import { TabButton } from "./styles";
import { ToolTitle } from "../Shared/styles";
export default function Tab({ ...props }) {
    return (
        <TabButton {...props}>
            <ToolTitle>{props.title}</ToolTitle>
        </TabButton>
    );
}
