import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResumeProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</ResumeProvider>
  </React.StrictMode>
);