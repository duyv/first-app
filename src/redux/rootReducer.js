import { combineReducers } from "redux";
import { classReducer } from "./classReducer";
import { studentReducer } from "./studentReducer";
import { dataReducer } from "./dataReducer";

const rootReducer = combineReducers({
  studentReducer,
  classReducer,
  dataReducer,
});

export default rootReducer;
