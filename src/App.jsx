import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";

import { lightTheme, darkTheme } from "themes";

function App() {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <Header toggleTheme={toggleTheme} />
        <h1>hello</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
