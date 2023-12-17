import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { thunk, withExtraArgument } from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(thunk))