// root app
// i handle routes here
// just switch from route to protected route to lock the available routes

import React from "react";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from "./Views/Login/SignIn";
import { RecoilRoot } from "recoil";
import Home from "./Views/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Views/Login/Login";
import Signup from "./Views/Signup/Signup";

import { useSelector } from "react-redux";
const history = createBrowserHistory();

function App() {
  const token = useSelector((state) => state.authReducer.data.access_token);
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router history={history}>
          <Switch>
            {/*<Route component={SignIn} exact path='/'/> */}
            <Route component={Login} exact path="/"></Route>
            {/* <ProtectedRoute  component={Home}  path='/home' /> */}

            {<Route component={Home} path="/home" />}
            {<Route component={Signup} path="/signup" />}

            {/* <ProtectedRoute  component={Dashboard}  path='/home' /> */}
          </Switch>
        </Router>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
