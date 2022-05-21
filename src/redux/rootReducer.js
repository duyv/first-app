import { combineReducers } from "redux";
import { classReducer } from "./classReducer";
import { studentReducer } from "./studentReducer";
import { processReducer } from "./processReducer";
import { dataReducer } from "./dataReducer";

const rootReducer = combineReducers({
  studentReducer,
  classReducer,
  processReducer,
  dataReducer,
});

export default rootReducer;
