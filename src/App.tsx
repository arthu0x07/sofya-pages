import { GlobalStyles } from "/src/assets/styles/GlobalStyles";
import { AppRoutes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { theme } from "./assets/styles/DefaultTheme.ts";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <AppRoutes />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
