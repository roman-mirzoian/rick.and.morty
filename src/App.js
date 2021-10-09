import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "./components/elements/Header";
import AppRouter from "./components/UI/AppRouter";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
