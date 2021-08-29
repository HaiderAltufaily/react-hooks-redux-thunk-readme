import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import App from "./App";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));
const store = createStore(rootReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
