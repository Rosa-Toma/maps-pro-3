import { useState } from "react";
import { Button } from "components";
import { Container, Items } from "./styles";
import { icons } from "assets/icons/icons";

const Dropdown = ({ ...props }) => {
    const [icon, setIcon] = useState(props.baseIcon);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState(icons.dropdownDown);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setDropdownIcon(icons.dropdownDown);
        } else {
            setDropdownIcon(icons.dropdownUp);
        }
    };

    return (
        <Container {...props} onClick={props.sidebar ? null : handleClick}>
            <Button sidebar={props.sidebar} title={props.title} icon={icon} onClick={handleClick} width={props.sidebar ? "100%" : "80px"} dropdown={dropdownIcon} />
            <Items {...props} isOpen={isOpen}>
                {props.children.map((child) => {
                    return (
                        <div key={`${Math.random()}`} onClick={() => setIcon(child.props.icon)}>
                            {child}
                        </div>
                    );
                })}
            </Items>
        </Container>
    );
};

export default Dropdown;
