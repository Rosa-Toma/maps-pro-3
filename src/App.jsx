import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./styles/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <button onClick={toggleTheme}>toggle</button>
      </>
    </ThemeProvider>
  );
}

export default App;
