import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBuildingPage from "../pages/add-building-page";
import EditBuildingPage from "../pages/edit-building-page";
import BuildingsPage from "../pages/buildings-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <BuildingsPage />
        </Route>

        <Route path="/add">
          <AddBuildingPage />
        </Route>

        <Route path="/edit/:id">
          <EditBuildingPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
