import { StyledButton, Icon, Title, ChildsContainer } from "./styles";
import { icons } from "assets/icons/icons";
import { useState } from "react";

const Button = ({ children, icon, title, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={handleClick}>
            <StyledButton {...props}>
                <Icon>
                    {icon} {children && icons.dropdown}
                </Icon>
                <Title>{title}</Title>
            </StyledButton>
            {isOpen && <ChildsContainer>{children}</ChildsContainer>}
        </div>
    );
};

export default Button;
