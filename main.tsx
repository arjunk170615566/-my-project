import React from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // <-- This now exists!

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
