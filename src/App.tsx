import { GlobalStyles } from "/src/assets/styles/GlobalStyles";
import { AppRoutes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
