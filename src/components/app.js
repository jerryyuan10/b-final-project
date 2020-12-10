import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddBuildingPage from "../pages/add-building-page";
import EditBuildingPage from "../pages/edit-building-page";
import BuildingsPage from "../pages/buildings-page";
import NotFoundPage from "../pages/not-found-page";
import AccountPage from "../pages/account-page";
import { auth } from "../data/firebase";
import Nav from "./nav";

function AuthenticatedRoute(props){
  const { isAuthenticated, children, ...routeProps} = props;
return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/account" />}</Route>;
}

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
      const unsubscribbe = auth.onAuthStateChanged((currentUser) => {
          setUser(currentUser)
      });
      return unsubscribbe;
  }, []);

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Switch>
      <Route path="/account">
          <AccountPage user={user} />
        </Route>

        <AuthenticatedRoute path="/" exact isAuthenticated={isAuthenticated}>
          <BuildingsPage />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/add" isAuthenticated={isAuthenticated}>
          <AddBuildingPage />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditBuildingPage />
        </AuthenticatedRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
