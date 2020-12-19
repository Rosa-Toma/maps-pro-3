import { useContext } from "react";
import { ThemeContext } from "styled-components";
import logoLight from "assets/images/logoLight.webp";
import logoDark from "assets/images/logoDark.webp";
import { HeaderLogoImg } from "styles/Header/HeaderLogoImg";

export default function HeaderLogo() {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.background.primary;

  return (
    <div>
      <HeaderLogoImg
        src={backgroundColor === "#FAFAFA" ? logoDark : logoLight}
        alt="logo"
      />
    </div>
  );
}
