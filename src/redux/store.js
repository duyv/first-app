import { createStore } from "redux";
// import { studentReducer } from "./studentReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
export default store;
