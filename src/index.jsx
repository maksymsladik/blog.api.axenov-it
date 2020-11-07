import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//------------redux-------------------
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import mainReducer from "./system/mainReducer";
//------------------------------------
import App from "./components/App";
import "./index.css";

const store = createStore(mainReducer, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
