import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  once: true,
  disable: window.innerWidth < 768,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);