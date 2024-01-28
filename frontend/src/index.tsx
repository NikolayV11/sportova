import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";

import { Provider } from "react-redux";
import "./normalize.css";
import "./index.css";

import App from "./App";
const documentRoot = document.getElementById("root");
if (documentRoot) {
  const root = ReactDOM.createRoot(documentRoot);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
  );
}
