import { useContext } from "react";
import { ThemeContext } from "styled-components";
import logoLight from "assets/images/logoLight.webp";
import logoDark from "assets/images/logoDark.webp";
import Img from "./styles";

const Logo = () => {
    const themeContext = useContext(ThemeContext);
    const backgroundColor = themeContext.background.primary;

    return <Img src={backgroundColor === "#FAFAFA" ? logoDark : logoLight} alt="logo" />;
};

export default Logo;
