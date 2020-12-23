import { StyledButton, Title } from "./styles";

const Button = ({ ...props }) => {
    return (
        <StyledButton {...props}>
            <span>
                {props.icon} {props.dropdown && props.dropdown}
            </span>
            <Title>{props.title}</Title>
        </StyledButton>
    );
};

export default Button;
