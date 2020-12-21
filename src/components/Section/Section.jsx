import { StyledSection, Title } from "./styles";

const Section = ({ children, title, ...props }) => {
    return (
        <div>
            <Title>{title}</Title>
            <StyledSection {...props}>{children}</StyledSection>
        </div>
    );
};

export default Section;
