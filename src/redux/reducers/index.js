import { combineReducers } from "redux";
import auth from "./authReducer";
import movies from "./movieReducer";
const rootReducer = combineReducers({
  auth,
  movies
});

export default rootReducer;
