import React from "react";
import ReactDOM from "react-dom";
import 'boostrap/dist/css/boostrap.min.css';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
