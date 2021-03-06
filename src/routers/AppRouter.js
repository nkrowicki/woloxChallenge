import React, { useState, useEffect, Suspense, lazy } from "react";
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

import ErrorBoundary from "../components/ErrorBoundary";
import Spinner from "../components/spinner/Spinner";
import throwError from "../components/throwError/throwError";

const LandingScreen = lazy(() => import("../pages/LandingScreen"));
const AuthRouter = lazy(() => import("./AuthRouter"));
const WoloxRouter = lazy(() => import("./WoloxRouter"));

const AppRouter = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const iWanToWorkAtWolox = true;

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
  
  iWanToWorkAtWolox && console.log('Hi, hire me!')

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path="/"
                component={LandingScreen}
                isAuthenticated={isLoggedIn}
              />
              <Route
                exact
                path="/throwError"
                component={throwError}
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
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRouter;
