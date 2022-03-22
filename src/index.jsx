import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider as LoginProvider } from "./Components/Context/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
