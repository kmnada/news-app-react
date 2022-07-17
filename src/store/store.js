import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';
import LoggerMiddleware from './loggerMiddleware';

const middlewares = [LoggerMiddleware, thunkMiddleware];

/*
Then second argument, ie. the initial state is optional. Based on the type of arguments,
 the createStore function automatically identifies that the passed agument is a middlewares.
 */

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
