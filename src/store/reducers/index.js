import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users";
import postReducer from "./posts";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
