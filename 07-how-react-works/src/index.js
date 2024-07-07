import React from "react";
import ReactDOM from "react-dom/client";
//import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//so we can see the diffrent of the automatic Batching in REACT 18
//REACT 17(No Automatic BATCHING)
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */
