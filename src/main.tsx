import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./config/i18next.ts";
import FontFaceObserver from "fontfaceobserver";
import { BrowserRouter as Router } from "react-router-dom";

const FONT = {
  kantumruy: new FontFaceObserver("Kantumruy"),
  kantumruyBold: new FontFaceObserver("Kantumruy", { weight: "bold" }),
  iceberg: new FontFaceObserver("Iceberg"),
  inter: new FontFaceObserver("Inter"),
  interBold: new FontFaceObserver("Inter", { weight: "bold" }),
  itim: new FontFaceObserver("Itim"),
};

async function startup() {
  return await Promise.all([
    FONT.kantumruy.load(),
    FONT.kantumruyBold.load(),
    FONT.iceberg.load(),
    FONT.inter.load(),
    FONT.interBold.load(),
    FONT.itim.load(),
  ]);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

startup().then(() => {
  document.documentElement.classList.add("fonts-loaded");
});
