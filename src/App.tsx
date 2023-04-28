import { GlobalStyles } from "/src/assets/styles/GlobalStyles";
import { AppRoutes } from "./routes";

import { theme } from "./assets/styles/DefaultTheme.ts";
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./contexts/LanguageProvider";

export function App() {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
