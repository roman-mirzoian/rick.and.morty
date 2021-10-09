import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// import CharacterPage from "./components/pages/CharacterPage";
// import EpisodesPage from "./components/pages/EpisodesPage";
import EpisodesPage from "./components/pages/EpisodesPage";
import LocationsPage from "./components/pages/LocationsPage";
import Header from "./components/elements/Header";
import Tabs from "./components/elements/Tabs";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Tabs />
          {/* <CharacterPage /> */}
          {/* <EpisodesPage /> */}
          <LocationsPage />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
