import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter, Route} from "react-router-dom"
import store from "./state/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
