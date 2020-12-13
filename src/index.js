import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function SearchEngine() {
  return ( <div>
     <App />;


    <a href="https://github.com/JulianaEkemezie/react-project" target="_blank">Coded by Juliana Ekemezie</a>
  </div>)
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SearchEngine />
  </React.StrictMode>,
  rootElement
);
