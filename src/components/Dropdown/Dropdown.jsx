import { useState } from "react";
import { Button } from "components";
import { StyledDiv, Childs } from "./styles";
import { icons } from "assets/icons/icons";

const Dropdown = ({ ...props }) => {
    const [icon, setIcon] = useState(props.baseIcon);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState(icons.dropdownDown);

    const width = props.sidebar ? "390px" : "80px";

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setDropdownIcon(icons.dropdownDown);
        } else {
            setDropdownIcon(icons.dropdownUp);
        }
    };

    return (
        <StyledDiv {...props} onClick={props.sidebar ? null : handleClick}>
            <Button sidebar={props.sidebar} title={props.title} icon={icon} onClick={handleClick} width={width} dropdown={dropdownIcon} />
            <Childs {...props} isOpen={isOpen}>
                {props.children.map((child) => {
                    return (
                        <div key={`${Math.random()}`} onClick={() => setIcon(child.props.icon)}>
                            {child}
                        </div>
                    );
                })}
            </Childs>
        </StyledDiv>
    );
};

export default Dropdown;
