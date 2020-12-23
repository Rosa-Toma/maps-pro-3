import { Title, Items } from "./styles";

const Section = ({ children, title, ...props }) => {
    return (
        <div>
            {title && <Title>{title}</Title>}
            <Items {...props}>{children}</Items>
        </div>
    );
};

export default Section;
