import React from 'react';
import { createStore, applyMiddleware ,compose,combineReducers} from 'redux'
import preloadedState from './state';
import reducer from './reducer';
import enhancer from  './middlewares'

let store = createStore(
    reducer,
    preloadedState,
    enhancer,
);
export default store;