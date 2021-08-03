import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";

// thunk to dispatch
const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch);
      return;
    }
    next(action);
  };

// Creating redux store
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("store", store);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
