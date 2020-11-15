import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
// import loadSampleData from "./data/load-sample-data";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// loadSampleData();

console.log(process.env);
// console.log(process.env.REACT_APP_TITILE);
// console.log(process.env.REACT_APP_AUTHOR);