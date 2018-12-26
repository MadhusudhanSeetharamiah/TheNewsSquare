import { combineReducers } from "redux";
import articlesReducer from "./articles";
import rrfState from "../rrfcombineforms";

export default combineReducers({
  articlesReducer: articlesReducer,
  rrfState: rrfState
});
