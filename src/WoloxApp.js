import React from "react";
// import styles from "./WoloxApp.module.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

const WoloxApp = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
};

export default WoloxApp;
