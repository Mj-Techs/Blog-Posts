import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import "./index.css";
import App from "./App";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
