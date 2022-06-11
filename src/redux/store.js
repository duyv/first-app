import { applyMiddleware, createStore } from "redux";
// import { studentReducer } from "./studentReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { rootSaga } from "../saga/rootSaga";

// function firstMiddleWare(store){
//     return function(next){
//         return function(action){

//         }
//     }
// }
const sagaMiddleware = createSagaMiddleware();
const firstMiddleWare = (store) => (next) => async (action) => {
  //   console.log("action:: 1", action);
  //   if (action.type === "FETCH_STUDENT") {
  //     const json = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const result = await json.json();
  //     console.log("result::", result);
  //     action["payload"] = result;
  //     return next(action);
  //   }
  //   //   console.log("next>>", next);
  //   //   console.log("store>>", store.getState());
  //   console.log("xuong day");
  console.log("them log");
  if (typeof action === "function") {
    return action(next);
  }
  return next(action);
};
// lenh dispatch ==> middleware: sagaMiddleware--> call(RootSaga) ==>store
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
