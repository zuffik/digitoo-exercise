import {applyMiddleware, createStore as cs, Middleware, Store} from 'redux';
import {Reducer} from './Reducer';
import {createLogger} from 'redux-logger';

const createStore = (): Store => {
    const middlewares: Middleware[] = [];
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger())
    }
    return cs(Reducer, applyMiddleware(...middlewares));
};

export const store = createStore();
