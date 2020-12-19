import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddBuildingPage from "../pages/add-building-page";
import EditBuildingPage from "../pages/edit-building-page";
import BuildingsPage from "../pages/buildings-page";
import NotFoundPage from "../pages/not-found-page";
import AccountPage from "../pages/account-page";
import { auth } from "../data/firebase";
import useUser from "../hooks/use-user";
import Nav from "./nav";

function AuthenticatedRoute(props){
  const { isAuthenticated, children, ...routeProps} = props;
return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/account" />}</Route>;
}

function App() {
  const [isLoading, error, user] = useUser(auth);
  const isAuthenticated = user !== null;

  if (error) console.error(error);
  if (isLoading) return null;

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Switch>
      <Route path="/account">
          <AccountPage user={user} />
        </Route>

        <AuthenticatedRoute path="/" exact isAuthenticated={isAuthenticated}>
          <BuildingsPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/add" isAuthenticated={isAuthenticated}>
          <AddBuildingPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditBuildingPage user={user} />
        </AuthenticatedRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
