import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h3> Weather Search Engine </h3>
        <Weather defaultCity="Tehran" />
        <small className="source-code">
          <a
            href="https://github.com/ZahraMaroufi1996/SearchEnginewithAxios"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code by Zahra Maroufi
          </a>
        </small>
      </div>
    </div>
  );
}
