import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';

import store from "../store/store";


const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
)

export default ProviderMock