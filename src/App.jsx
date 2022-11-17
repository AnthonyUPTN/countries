import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Header from "components/Header";
import Main from "components/Main";

import MyRoutes from "routes/MyRoutes";

import { lightTheme, darkTheme } from "themes";

function App() {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header toggleTheme={toggleTheme} />
        <Main>
          <MyRoutes />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
