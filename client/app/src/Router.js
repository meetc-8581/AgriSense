import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import AddFram from "./components/User/AddFarm";

import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import Home from "./components/Home/Home";
import Weather from "./components/Weather/Weather";
import Recommendations from "./components/Recommendations/Recommendations";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/addfarm">
              <AddFram />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/recommendations">
              <Recommendations />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
