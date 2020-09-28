import React from "react";
// import styles from "./WoloxApp.module.scss";
import store from "./store/store";
import { Provider } from "react-redux";

const WoloxApp = () => {
  return (
    <Provider store={store}>
      <h1>Wolox</h1>
    </Provider>
  );
};

export default WoloxApp;
