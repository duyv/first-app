import { combineReducers } from "redux";
import { classReducer } from "./classReducer";
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  studentReducer,
  classReducer,
});

export default rootReducer;
