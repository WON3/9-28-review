import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/counterReducer';
import promiseMiddleware from 'redux-promise-middleware';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(promiseMiddleware())
    )
);

export default store;