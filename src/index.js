import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 🚀 用 HashRouter
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* 🔥 用 HashRouter 包裹 App */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();