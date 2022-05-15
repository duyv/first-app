import { combineReducers } from "redux";
import FilmReducer from "./filmReducer";

const rootReducer = combineReducers({
    films: FilmReducer,
});
export default rootReducer;