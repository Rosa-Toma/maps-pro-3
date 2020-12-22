import { StyledButton, Icon, Title } from "./styles";

const Button = ({ ...props }) => {
    return (
        <StyledButton {...props}>
            <Icon>
                {props.icon} {props.dropdown && props.dropdown}
            </Icon>
            <Title>{props.title}</Title>
        </StyledButton>
    );
};

export default Button;
