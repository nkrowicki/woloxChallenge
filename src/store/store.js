import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import technologyReducer from '../reducers/technologyReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    technologies: technologyReducer,
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;