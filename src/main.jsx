import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Global error handling
window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global error handler", message, source, lineno, colno, error);
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
