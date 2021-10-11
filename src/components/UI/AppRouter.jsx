import React from "react";

import CharactersPage from "../pages/CharactersPage";
import EpisodesPage from "../pages/EpisodesPage";
import LocationsPage from "../pages/LocationsPage";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MyWatchList from "../pages/MyWatchList";
import ErrorPage from "../pages/ErrorPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/characters">
          <CharactersPage />
        </Route>
        <Route path="/episodes">
          <EpisodesPage />
        </Route>
        <Route path="/locations">
          <LocationsPage />
        </Route>
        <Route path="/watch-list">
          <MyWatchList />
        </Route>
        <Route path="/error-page">
          <ErrorPage />
        </Route>
        <Redirect to="/error-page" />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
