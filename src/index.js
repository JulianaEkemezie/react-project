import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function SearchEngine() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SearchEngine />
  </React.StrictMode>,
  rootElement
);
