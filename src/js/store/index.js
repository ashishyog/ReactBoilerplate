import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fetchMiddleware from './middlewares/fetchMiddleware';
import httpErrorMiddleware from './middlewares/httpErrorMiddleware';
import * as reducers from '../reducers';

const DEV_MODE = process.env.NODE_ENV === 'development';

const middlewares = [thunk, fetchMiddleware, httpErrorMiddleware];
/* istanbul ignore next */
const composeEnhancers = (DEV_MODE && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const reducer = combineReducers({ ...reducers });

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;