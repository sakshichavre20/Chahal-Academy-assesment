import authReducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(authReducer, applyMiddleware(thunk));