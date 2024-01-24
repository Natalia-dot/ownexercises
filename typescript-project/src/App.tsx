import { Outlet } from "react-router-dom";
import { Footer, Nav } from "./components/index";
import { ThemeProvider } from "styled-components";
import { light} from "./styles/Theme";
import { GlobalStyles } from "./styles/Global";
import { useState } from "react";




const App: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(light)


  return (
    <>
    <ThemeProvider theme={selectedTheme}>
    <GlobalStyles />
        <Nav $setTheme={setSelectedTheme}/>
        <Outlet />
        <Footer />
        </ThemeProvider>
    </>
  );
};

export default App;
