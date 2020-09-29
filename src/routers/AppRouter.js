import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import styles from "./AppRouter.module.scss";
import { login } from "../actions/auth";

import LandingScreen from "../pages/LandingScreen";
import Spinner from "../components/spinner/Spinner";

// Routers
import AuthRouter from "./AuthRouter";
import WoloxRouter from "./WoloxRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setChecking(true);
    const localStorageToken = localStorage.getItem("token");

    if (localStorageToken || token) {
      !token && dispatch(login(localStorageToken));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setChecking(false);
  }, [dispatch, setChecking, setIsLoggedIn, token]);

  if (checking) {
    return (
      <div className={styles.center}>
        <Spinner />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={LandingScreen}
            isAuthenticated={isLoggedIn}
          />
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/app"
            component={WoloxRouter}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
