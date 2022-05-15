import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RootRouter from "./router";
import rootReducers from "./components/redux/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
// --> Home page --> localhost:3000
//      --> Week 1 --> localhost:3000/week-1
//      --> Week 2 --> localhost:3000/week-2
//      --> Week 3 --> localhost:3000/week-3
const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
