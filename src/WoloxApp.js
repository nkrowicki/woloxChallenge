import React from "react";
// import styles from "./WoloxApp.module.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import i18n from "./i18n";
import { I18nextProvider } from 'react-i18next';

const WoloxApp = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </I18nextProvider>
  );
};

export default WoloxApp;
