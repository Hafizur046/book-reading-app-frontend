import { combineReducers } from "redux";
import userReducer from "./user";
import { userLoadingReducer } from "./loaders";

export default combineReducers({ userReducer, userLoadingReducer });
