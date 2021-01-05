import { Container, Title } from "./styles";

const Button = ({ ...props }) => {
    return (
        <Container {...props}>
            <span>
                {props.icon} {props.dropdown && props.dropdown}
            </span>
            <Title>{props.title}</Title>
        </Container>
    );
};

export default Button;
