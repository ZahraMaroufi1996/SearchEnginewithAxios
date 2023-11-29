import React from "react";
// import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h2> Weather Search Engine </h2>
      <SearchEngine city="Tehran" />
      <small className="source-code">
        <a
          href="https://github.com/alimahmoodi/weather_app/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code by Zahra Maroufi
        </a>
      </small>
    </div>
  );
}
