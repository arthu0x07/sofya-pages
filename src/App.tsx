import { GlobalStyles } from "/src/assets/styles/GlobalStyles";
import { AppRoutes } from "./routes";

import { theme } from "./assets/styles/DefaultTheme.ts";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
